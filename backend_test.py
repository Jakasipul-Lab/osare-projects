#!/usr/bin/env python3
"""
OSARE Backend API Test Suite
Tests all API endpoints under /api prefix including vendor auth
"""
import requests
import json
import sys
import random
import string

# Base URL from environment
BASE_URL = "https://mara-guide.preview.emergentagent.com/api"

def print_test(name, passed, details=""):
    """Print test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"{status}: {name}")
    if details:
        print(f"   {details}")
    if not passed:
        print()

def generate_random_email():
    """Generate random email for testing"""
    random_str = ''.join(random.choices(string.ascii_lowercase + string.digits, k=8))
    return f"vendor+{random_str}@test.com"

# ============================================================================
# VENDOR AUTH TESTS
# ============================================================================

def test_vendor_register():
    """Test POST /api/auth/register - should return token and vendor without passwordHash or _id"""
    print("\n=== VENDOR AUTH TEST 1: POST /api/auth/register ===")
    try:
        email = generate_random_email()
        payload = {
            "name": "Jane Guide",
            "company": "Savanna Tours",
            "email": email,
            "phone": "254700000000",
            "password": "secret123"
        }
        
        response = requests.post(f"{BASE_URL}/auth/register", json=payload, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Register vendor status", False, f"Expected 200, got {response.status_code}: {data}")
            return None, None
        
        # Check token exists
        if "token" not in data:
            print_test("Register vendor token", False, "Missing token in response")
            return None, None
        
        # Check vendor object exists
        if "vendor" not in data:
            print_test("Register vendor object", False, "Missing vendor in response")
            return None, None
        
        vendor = data["vendor"]
        
        # CRITICAL: Check no passwordHash leaked
        if "passwordHash" in vendor:
            print_test("Register vendor no passwordHash", False, "CRITICAL: passwordHash leaked in response!")
            return None, None
        
        # CRITICAL: Check no _id leaked
        if "_id" in vendor:
            print_test("Register vendor no _id", False, "CRITICAL: MongoDB _id leaked in response!")
            return None, None
        
        # Check vendor has id (UUID)
        if "id" not in vendor:
            print_test("Register vendor id", False, "Missing id in vendor object")
            return None, None
        
        # Check vendor fields
        if vendor.get("name") != "Jane Guide":
            print_test("Register vendor name", False, f"Expected 'Jane Guide', got {vendor.get('name')}")
            return None, None
        
        if vendor.get("company") != "Savanna Tours":
            print_test("Register vendor company", False, f"Expected 'Savanna Tours', got {vendor.get('company')}")
            return None, None
        
        if vendor.get("email") != email:
            print_test("Register vendor email", False, f"Expected '{email}', got {vendor.get('email')}")
            return None, None
        
        print_test("Register vendor", True, f"Registered vendor with token: {data['token'][:20]}... (no passwordHash or _id leaked)")
        return data["token"], email
    except Exception as e:
        print_test("Register vendor", False, f"Exception: {str(e)}")
        return None, None

def test_vendor_register_duplicate(email):
    """Test POST /api/auth/register with duplicate email - should return 409"""
    print("\n=== VENDOR AUTH TEST 2: POST /api/auth/register (duplicate email) ===")
    if not email:
        print_test("Register duplicate email", False, "No email provided (previous test failed)")
        return False
    
    try:
        payload = {
            "name": "Another Vendor",
            "company": "Another Company",
            "email": email,
            "phone": "254700000001",
            "password": "password123"
        }
        
        response = requests.post(f"{BASE_URL}/auth/register", json=payload, timeout=10)
        data = response.json()
        
        # Should return 409 Conflict
        if response.status_code != 409:
            print_test("Register duplicate email status", False, f"Expected 409, got {response.status_code}: {data}")
            return False
        
        # Should have error message
        if "error" not in data:
            print_test("Register duplicate email error", False, "Missing error message in response")
            return False
        
        print_test("Register duplicate email", True, f"Correctly rejected duplicate email with 409: {data.get('error')}")
        return True
    except Exception as e:
        print_test("Register duplicate email", False, f"Exception: {str(e)}")
        return False

def test_vendor_login(email):
    """Test POST /api/auth/login - should return token and vendor"""
    print("\n=== VENDOR AUTH TEST 3: POST /api/auth/login ===")
    if not email:
        print_test("Login vendor", False, "No email provided (register test failed)")
        return None
    
    try:
        payload = {
            "email": email,
            "password": "secret123"
        }
        
        response = requests.post(f"{BASE_URL}/auth/login", json=payload, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Login vendor status", False, f"Expected 200, got {response.status_code}: {data}")
            return None
        
        # Check token exists
        if "token" not in data:
            print_test("Login vendor token", False, "Missing token in response")
            return None
        
        # Check vendor object exists
        if "vendor" not in data:
            print_test("Login vendor object", False, "Missing vendor in response")
            return None
        
        vendor = data["vendor"]
        
        # CRITICAL: Check no passwordHash leaked
        if "passwordHash" in vendor:
            print_test("Login vendor no passwordHash", False, "CRITICAL: passwordHash leaked in response!")
            return None
        
        # CRITICAL: Check no _id leaked
        if "_id" in vendor:
            print_test("Login vendor no _id", False, "CRITICAL: MongoDB _id leaked in response!")
            return None
        
        print_test("Login vendor", True, f"Logged in successfully with token: {data['token'][:20]}... (no passwordHash or _id leaked)")
        return data["token"]
    except Exception as e:
        print_test("Login vendor", False, f"Exception: {str(e)}")
        return None

def test_vendor_login_wrong_password(email):
    """Test POST /api/auth/login with wrong password - should return 401"""
    print("\n=== VENDOR AUTH TEST 4: POST /api/auth/login (wrong password) ===")
    if not email:
        print_test("Login wrong password", False, "No email provided (register test failed)")
        return False
    
    try:
        payload = {
            "email": email,
            "password": "wrongpassword"
        }
        
        response = requests.post(f"{BASE_URL}/auth/login", json=payload, timeout=10)
        data = response.json()
        
        # Should return 401 Unauthorized
        if response.status_code != 401:
            print_test("Login wrong password status", False, f"Expected 401, got {response.status_code}: {data}")
            return False
        
        # Should have error message
        if "error" not in data:
            print_test("Login wrong password error", False, "Missing error message in response")
            return False
        
        print_test("Login wrong password", True, f"Correctly rejected wrong password with 401: {data.get('error')}")
        return True
    except Exception as e:
        print_test("Login wrong password", False, f"Exception: {str(e)}")
        return False

def test_vendor_me(token):
    """Test GET /api/auth/me with valid token - should return vendor"""
    print("\n=== VENDOR AUTH TEST 5: GET /api/auth/me (with token) ===")
    if not token:
        print_test("Get vendor me", False, "No token provided (login test failed)")
        return None
    
    try:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Get vendor me status", False, f"Expected 200, got {response.status_code}: {data}")
            return None
        
        # Check vendor object exists
        if "vendor" not in data:
            print_test("Get vendor me object", False, "Missing vendor in response")
            return None
        
        vendor = data["vendor"]
        
        # CRITICAL: Check no passwordHash leaked
        if "passwordHash" in vendor:
            print_test("Get vendor me no passwordHash", False, "CRITICAL: passwordHash leaked in response!")
            return None
        
        # CRITICAL: Check no _id leaked
        if "_id" in vendor:
            print_test("Get vendor me no _id", False, "CRITICAL: MongoDB _id leaked in response!")
            return None
        
        # Check vendor has id
        if "id" not in vendor:
            print_test("Get vendor me id", False, "Missing id in vendor object")
            return None
        
        print_test("Get vendor me", True, f"Retrieved vendor info for: {vendor.get('name')} (no passwordHash or _id leaked)")
        return vendor
    except Exception as e:
        print_test("Get vendor me", False, f"Exception: {str(e)}")
        return None

def test_vendor_me_no_token():
    """Test GET /api/auth/me without token - should return 401"""
    print("\n=== VENDOR AUTH TEST 6: GET /api/auth/me (no token) ===")
    try:
        response = requests.get(f"{BASE_URL}/auth/me", timeout=10)
        data = response.json()
        
        # Should return 401 Unauthorized
        if response.status_code != 401:
            print_test("Get vendor me no token status", False, f"Expected 401, got {response.status_code}: {data}")
            return False
        
        print_test("Get vendor me no token", True, "Correctly rejected request without token with 401")
        return True
    except Exception as e:
        print_test("Get vendor me no token", False, f"Exception: {str(e)}")
        return False

def test_vendor_me_invalid_token():
    """Test GET /api/auth/me with invalid token - should return 401"""
    print("\n=== VENDOR AUTH TEST 7: GET /api/auth/me (invalid token) ===")
    try:
        headers = {"Authorization": "Bearer invalid-token-12345"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers, timeout=10)
        data = response.json()
        
        # Should return 401 Unauthorized
        if response.status_code != 401:
            print_test("Get vendor me invalid token status", False, f"Expected 401, got {response.status_code}: {data}")
            return False
        
        print_test("Get vendor me invalid token", True, "Correctly rejected request with invalid token with 401")
        return True
    except Exception as e:
        print_test("Get vendor me invalid token", False, f"Exception: {str(e)}")
        return False

def test_create_listing_with_auth(token, vendor):
    """Test POST /api/listings with Bearer token - should attach ownerId"""
    print("\n=== VENDOR AUTH TEST 8: POST /api/listings (with Bearer token) ===")
    if not token or not vendor:
        print_test("Create listing with auth", False, "No token or vendor provided (previous tests failed)")
        return None
    
    try:
        payload = {
            "type": "safari",
            "category": "Sightseeing",
            "title": "Vendor Owned Tour",
            "priceValue": 200,
            "currency": "USD",
            "priceLabel": "$200",
            "includes": "X,Y",
            "keywords": "vendor,tour"
        }
        
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.post(f"{BASE_URL}/listings", json=payload, headers=headers, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Create listing with auth status", False, f"Expected 200, got {response.status_code}: {data}")
            return None
        
        # Check listing has id
        if "id" not in data:
            print_test("Create listing with auth id", False, "Missing id in response")
            return None
        
        # CRITICAL: Check ownerId is set to vendor's id
        if "ownerId" not in data:
            print_test("Create listing with auth ownerId", False, "Missing ownerId in response")
            return None
        
        if data["ownerId"] != vendor["id"]:
            print_test("Create listing with auth ownerId match", False, f"Expected ownerId={vendor['id']}, got {data['ownerId']}")
            return None
        
        # Check no _id leaked
        if "_id" in data:
            print_test("Create listing with auth no _id", False, "MongoDB _id leaked in response")
            return None
        
        print_test("Create listing with auth", True, f"Created listing with ownerId={data['ownerId']} (matches vendor.id)")
        return data["id"]
    except Exception as e:
        print_test("Create listing with auth", False, f"Exception: {str(e)}")
        return None

def test_get_my_listings(token, vendor, listing_id):
    """Test GET /api/my-listings with Bearer token - should return only vendor's listings"""
    print("\n=== VENDOR AUTH TEST 9: GET /api/my-listings (with Bearer token) ===")
    if not token or not vendor:
        print_test("Get my listings", False, "No token or vendor provided (previous tests failed)")
        return False
    
    try:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(f"{BASE_URL}/my-listings", headers=headers, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Get my listings status", False, f"Expected 200, got {response.status_code}: {data}")
            return False
        
        # Should be an array
        if not isinstance(data, list):
            print_test("Get my listings array", False, f"Expected array, got {type(data)}")
            return False
        
        # Should include the listing we just created
        if listing_id:
            found = False
            for item in data:
                if item.get("id") == listing_id:
                    found = True
                    break
            if not found:
                print_test("Get my listings includes created", False, f"Created listing {listing_id} not found in my-listings")
                return False
        
        # CRITICAL: All listings should have ownerId == vendor.id
        for item in data:
            if item.get("ownerId") != vendor["id"]:
                print_test("Get my listings ownerId match", False, f"Found listing with ownerId={item.get('ownerId')}, expected {vendor['id']}")
                return False
        
        # Check no _id leaked
        for item in data:
            if "_id" in item:
                print_test("Get my listings no _id", False, "MongoDB _id leaked in response")
                return False
        
        print_test("Get my listings", True, f"Retrieved {len(data)} listing(s), all owned by vendor (ownerId={vendor['id']})")
        return True
    except Exception as e:
        print_test("Get my listings", False, f"Exception: {str(e)}")
        return False

def test_get_my_listings_no_token():
    """Test GET /api/my-listings without token - should return 401"""
    print("\n=== VENDOR AUTH TEST 10: GET /api/my-listings (no token) ===")
    try:
        response = requests.get(f"{BASE_URL}/my-listings", timeout=10)
        data = response.json()
        
        # Should return 401 Unauthorized
        if response.status_code != 401:
            print_test("Get my listings no token status", False, f"Expected 401, got {response.status_code}: {data}")
            return False
        
        print_test("Get my listings no token", True, "Correctly rejected request without token with 401")
        return True
    except Exception as e:
        print_test("Get my listings no token", False, f"Exception: {str(e)}")
        return False

def test_create_lead_for_vendor_listing(listing_id):
    """Test POST /api/leads for vendor's listing"""
    print("\n=== VENDOR AUTH TEST 11: POST /api/leads (for vendor listing) ===")
    if not listing_id:
        print_test("Create lead for vendor listing", False, "No listing_id provided (create listing test failed)")
        return None
    
    try:
        payload = {"listingId": listing_id}
        response = requests.post(f"{BASE_URL}/leads", json=payload, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Create lead for vendor listing status", False, f"Expected 200, got {response.status_code}: {data}")
            return None
        
        # Check lead has id
        if "id" not in data:
            print_test("Create lead for vendor listing id", False, "Missing id in response")
            return None
        
        # Check whatsappUrl
        if "whatsappUrl" not in data:
            print_test("Create lead for vendor listing whatsappUrl", False, "Missing whatsappUrl in response")
            return None
        
        if "wa.me/254758378729" not in data["whatsappUrl"]:
            print_test("Create lead for vendor listing whatsappUrl format", False, f"whatsappUrl doesn't contain wa.me/254758378729")
            return None
        
        print_test("Create lead for vendor listing", True, f"Created lead with id: {data['id']}")
        return data["id"]
    except Exception as e:
        print_test("Create lead for vendor listing", False, f"Exception: {str(e)}")
        return None

def test_get_my_stats(token, vendor, listing_id, lead_id):
    """Test GET /api/my-stats with Bearer token - should return vendor's stats"""
    print("\n=== VENDOR AUTH TEST 12: GET /api/my-stats (with Bearer token) ===")
    if not token or not vendor:
        print_test("Get my stats", False, "No token or vendor provided (previous tests failed)")
        return False
    
    try:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(f"{BASE_URL}/my-stats", headers=headers, timeout=10)
        data = response.json()
        
        # Check status code
        if response.status_code != 200:
            print_test("Get my stats status", False, f"Expected 200, got {response.status_code}: {data}")
            return False
        
        # Check required fields
        required_fields = ["listings", "leads", "commissionOwedUSD", "recentLeads"]
        for field in required_fields:
            if field not in data:
                print_test("Get my stats fields", False, f"Missing field: {field}")
                return False
        
        # Check listings count (should be >= 1 since we created one)
        if not isinstance(data["listings"], int) or data["listings"] < 1:
            print_test("Get my stats listings", False, f"Expected listings >= 1, got {data['listings']}")
            return False
        
        # Check leads count (should be >= 1 since we created one)
        if not isinstance(data["leads"], int) or data["leads"] < 1:
            print_test("Get my stats leads", False, f"Expected leads >= 1, got {data['leads']}")
            return False
        
        # Check commissionOwedUSD is numeric
        if not isinstance(data["commissionOwedUSD"], (int, float)):
            print_test("Get my stats commissionOwedUSD type", False, f"Expected numeric, got {type(data['commissionOwedUSD'])}")
            return False
        
        # For a $200 listing, 5% commission = $10
        expected_commission = 10.0
        if abs(data["commissionOwedUSD"] - expected_commission) > 0.01:
            print_test("Get my stats commissionOwedUSD value", False, f"Expected ~{expected_commission}, got {data['commissionOwedUSD']}")
            return False
        
        # Check recentLeads is array
        if not isinstance(data["recentLeads"], list):
            print_test("Get my stats recentLeads type", False, f"Expected array, got {type(data['recentLeads'])}")
            return False
        
        # Should include the lead we created
        if lead_id:
            found = False
            for lead in data["recentLeads"]:
                if lead.get("id") == lead_id:
                    found = True
                    break
            if not found:
                print_test("Get my stats recentLeads includes created", False, f"Created lead {lead_id} not found in recentLeads")
                return False
        
        # Check no _id leaked in recentLeads
        for lead in data["recentLeads"]:
            if "_id" in lead:
                print_test("Get my stats recentLeads no _id", False, "MongoDB _id leaked in recentLeads")
                return False
        
        print_test("Get my stats", True, f"Stats: {data['listings']} listing(s), {data['leads']} lead(s), ${data['commissionOwedUSD']} commission")
        return True
    except Exception as e:
        print_test("Get my stats", False, f"Exception: {str(e)}")
        return False

def test_get_my_stats_no_token():
    """Test GET /api/my-stats without token - should return 401"""
    print("\n=== VENDOR AUTH TEST 13: GET /api/my-stats (no token) ===")
    try:
        response = requests.get(f"{BASE_URL}/my-stats", timeout=10)
        data = response.json()
        
        # Should return 401 Unauthorized
        if response.status_code != 401:
            print_test("Get my stats no token status", False, f"Expected 401, got {response.status_code}: {data}")
            return False
        
        print_test("Get my stats no token", True, "Correctly rejected request without token with 401")
        return True
    except Exception as e:
        print_test("Get my stats no token", False, f"Exception: {str(e)}")
        return False

# ============================================================================
# MAIN TEST RUNNER
# ============================================================================

def main():
    """Run all vendor auth tests"""
    print("=" * 70)
    print("OSARE Vendor Auth Backend API Test Suite")
    print("=" * 70)
    print(f"Base URL: {BASE_URL}")
    
    results = []
    
    # Test 1: Register vendor
    token1, email = test_vendor_register()
    results.append(("Register vendor", token1 is not None and email is not None))
    
    # Test 2: Register duplicate email
    results.append(("Register duplicate email", test_vendor_register_duplicate(email)))
    
    # Test 3: Login vendor
    token2 = test_vendor_login(email)
    results.append(("Login vendor", token2 is not None))
    
    # Test 4: Login with wrong password
    results.append(("Login wrong password", test_vendor_login_wrong_password(email)))
    
    # Test 5: Get vendor me with token
    vendor = test_vendor_me(token2)
    results.append(("Get vendor me", vendor is not None))
    
    # Test 6: Get vendor me without token
    results.append(("Get vendor me no token", test_vendor_me_no_token()))
    
    # Test 7: Get vendor me with invalid token
    results.append(("Get vendor me invalid token", test_vendor_me_invalid_token()))
    
    # Test 8: Create listing with Bearer token
    listing_id = test_create_listing_with_auth(token2, vendor)
    results.append(("Create listing with auth", listing_id is not None))
    
    # Test 9: Get my listings
    results.append(("Get my listings", test_get_my_listings(token2, vendor, listing_id)))
    
    # Test 10: Get my listings without token
    results.append(("Get my listings no token", test_get_my_listings_no_token()))
    
    # Test 11: Create lead for vendor's listing
    lead_id = test_create_lead_for_vendor_listing(listing_id)
    results.append(("Create lead for vendor listing", lead_id is not None))
    
    # Test 12: Get my stats
    results.append(("Get my stats", test_get_my_stats(token2, vendor, listing_id, lead_id)))
    
    # Test 13: Get my stats without token
    results.append(("Get my stats no token", test_get_my_stats_no_token()))
    
    # Summary
    print("\n" + "=" * 70)
    print("VENDOR AUTH TEST SUMMARY")
    print("=" * 70)
    passed = sum(1 for _, result in results if result)
    total = len(results)
    print(f"Passed: {passed}/{total}")
    print(f"Failed: {total - passed}/{total}")
    
    if passed == total:
        print("\n🎉 All vendor auth tests passed!")
        print("\nCRITICAL CHECKS VERIFIED:")
        print("  ✅ No passwordHash leaked in any response")
        print("  ✅ No MongoDB _id leaked in any response")
        print("  ✅ ownerId correctly attached to listings created with Bearer token")
        print("  ✅ /api/my-listings returns only vendor's listings")
        print("  ✅ /api/my-stats calculates commission correctly (5% = $10 for $200 listing)")
        print("  ✅ All auth-protected endpoints return 401 without valid token")
        return 0
    else:
        print("\n❌ Some vendor auth tests failed:")
        for name, result in results:
            if not result:
                print(f"  - {name}")
        return 1

if __name__ == "__main__":
    sys.exit(main())
