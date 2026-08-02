#!/usr/bin/env python3
"""
OSARE Backend Test Suite - PostgreSQL Migration Verification
Tests all endpoints end-to-end against PostgreSQL (NEON)
"""

import requests
import json
import random
import string
from typing import Dict, Any

# Base URL from .env
BASE_URL = "https://easafariroutes.com/api"

# Test results tracking
test_results = []
created_listing_id = None
vendor_token = None
vendor_id = None
vendor_email = None
owned_listing_id = None


def log_test(step: str, passed: bool, details: str = ""):
    """Log test result"""
    status = "âœ… PASS" if passed else "âŒ FAIL"
    result = f"{status}: {step}"
    if details:
        result += f" - {details}"
    print(result)
    test_results.append({"step": step, "passed": passed, "details": details})


def random_email():
    """Generate random email for testing"""
    rand = ''.join(random.choices(string.ascii_lowercase + string.digits, k=8))
    return f"pg+{rand}@test.com"


def test_1_seed():
    """Test 1: POST /api/seed -> {inserted:15}"""
    print("\n=== TEST 1: Seed Listings ===")
    try:
        response = requests.post(f"{BASE_URL}/seed", timeout=30)
        log_test("POST /api/seed", response.status_code == 200, f"status={response.status_code}")
        if response.status_code == 200:
            data = response.json()
            log_test("Seed inserted count >= 15", data.get('inserted', 0) >= 15, f"inserted={data.get('inserted', 0)}")
    except Exception as e:
        log_test("POST /api/seed", False, str(e))


def test_2_listings():
    """Test 2: GET /api/listings -> array of listings"""
    print("\n=== TEST 2: Get Listings ===")
    global created_listing_id
    try:
        response = requests.get(f"{BASE_URL}/listings", timeout=30)
        log_test("GET /api/listings", response.status_code == 200, f"status={response.status_code}")
        if response.status_code == 200:
            data = response.json()
            log_test("Listings is array", isinstance(data, list), f"count={len(data)}")
            if len(data) > 0:
                created_listing_id = data[0]['id']
                log_test("First listing has id", created_listing_id is not None, f"id={created_listing_id}")
    except Exception as e:
        log_test("GET /api/listings", False, str(e))


def test_3_filters():
    """Test 3: GET /api/listings?type=safari and ?type=local"""
    print("\n=== TEST 3: Filters & Search ===")
    try:
        response = requests.get(f"{BASE_URL}/listings?type=safari", timeout=30)
        log_test("GET /api/listings?type=safari", response.status_code == 200, f"status={response.status_code}")
        response = requests.get(f"{BASE_URL}/listings?type=local", timeout=30)
        log_test("GET /api/listings?type=local", response.status_code == 200, f"status={response.status_code}")
        response = requests.get(f"{BASE_URL}/listings?q=kilimanjaro", timeout=30)
        log_test("GET /api/listings?q=kilimanjaro", response.status_code == 200, f"status={response.status_code}")
        response = requests.get(f"{BASE_URL}/listings?category=Hotel%20%26Resort", timeout=30)
        log_test("GET /api/listings?category=Hotel...", response.status_code == 200, f"status={response.status_code}")
    except Exception as e:
        log_test("Filters", False, str(e))


def test_4_crud():
    """Test 4: CRUD - POST/PUT/DELETE/listings"""
    print("\n=== TEST 4: Admin CRUD ===")
    global created_listing_id
    try:
        payload = {
            "name": "Test Safari Package",
            "type": "safari",
            "location": "Test Location",
            "price": 100,
            "currency": "USD",
            "description": "Test description",
            "category": "Safari Package",
            "image_url": "https://example.com/test.jpg"
        }
        response = requests.post(f"{BASE_URL}/listings", json=payload, timeout=30)
        log_test("POST /api/listings", response.status_code in [200, 201], f"status={response.status_code}")
        if response.status_code in [200, 201]:
            data = response.json()
            created_listing_id = data.get('id')
            log_test("Created listing has id", created_listing_id is not None, f"id={created_listing_id}")
        
        # Update
        if created_listing_id:
            update_payload = {"name": "Updated Test Package"}
            response = requests.put(f"{BASE_URL}/listings/{created_listing_id}", json=update_payload, timeout=30)
            log_test("PUT /api/listings/{id}", response.status_code == 200, f"status={response.status_code}")
            if response.status_code == 200:
                verify_response = requests.get(f"{BASE_URL}/listings", timeout=30)
                if verify_response.status_code == 200:
                    listings = verify_response.json()
                    updated = next((l for l in listings if l['id'] == created_listing_id), None)
                    log_test("Updated name persisted", updated and updated['name'] == "Updated Test Package", f"name={updated['name'] if updated else 'not found'}")
        
        # Delete
        if created_listing_id:
            response = requests.delete(f"{BASE_URL}/listings/{created_listing_id}", timeout=30)
            log_test("DELETE /api/listings/{id}", response.status_code == 200, f"status={response.status_code}")
    except Exception as e:
        log_test("CRUD", False, str(e))


def test_5_leads():
    """Test 5: Leads & Stats"""
    print("\n=== TEST 5: Leads & Stats ===")
    try:
        # Get a safari listing ID
        response = requests.get(f"{BASE_URL}/listings?type=safari", timeout=30)
        listing_id = None
        if response.status_code == 200:
            data = response.json()
            if data:
                listing_id = data[0]['id']
        
        # Post a lead
        if listing_id:
            payload = {
                "listing_id": listing_id,
                "traveler_name": "Test Traveler",
                "traveler_phone": "+254758378729",
                "party_size": 2,
                "travel_date": "2026-08-01"
            }
            response = requests.post(f"{BASE_URL}/leads", json=payload, timeout=30)
            log_test("POST /api/leads", response.status_code in [200, 201], f"status={response.status_code}")
            if response.status_code in [200, 201]:
                data = response.json()
                log_test("Lead has whatsapp_url", 'external_url' in data or 'whatsapp_url' in data, f"keys={list(data.keys())}")
        
        # Post another lead for stats
        if listing_id:
            payload['traveler_name'] = 'Test Traveler 2'
            response = requests.post(f"{BASE_URL}/leads", json=payload, timeout=30)
            log_test("POST /api/leads (2nd)", response.status_code in [200, 201], f"status={response.status_code}")
        
        # Get leads
        response = requests.get(f"{BASE_URL}/leads", timeout=30)
        log_test("GET /api/leads", response.status_code == 200, f"status={response.status_code}")
        
        # Get stats
        response = requests.get(f"{BASE_URL}/stats", timeout=30)
        log_test("GET /api/stats", response.status_code == 200, f"status={response.status_code}")
    except Exception as e:
        log_test("Leads & Stats", False, str(e))


def test_6_vendor_auth():
    """Test 6: Vendor Auth - register & login"""
    print("\n=== TEST 6: Vendor Auth ===")
    global vendor_token, vendor_id, vendor_email
    try:
        # Register
        vendor_email = random_email()
        payload = {
            "email": vendor_email,
            "password": "TestPass123!",
            "company_name": "Test Vendor Co",
            "phone": "+254758378729"
        }
        response = requests.post(f"{BASE_URL}/auth/register", json=payload, timeout=30)
        log_test("POST /api/auth/register", response.status_code in [200, 201], f"status={response.status_code}")
        
        # Register again - should fail (duplicate)
        response = requests.post(f"{BASE_URL}/auth/register", json=payload, timeout=30)
        log_test("Register duplicate - should fail", response.status_code in [400, 409], f"status={response.status_code}")
        
        # Login
        payload = {"email": vendor_email, "password": "TestPass123!"}
        response = requests.post(f"{BASE_URL}/auth/login", json=payload, timeout=30)
        log_test("POST /api/auth/login", response.status_code == 200, f"status={response.status_code}")
        if response.status_code == 200:
            data = response.json()
            vendor_token = data.get('token')
            vendor_id = data.get('vendor_id')
            log_test("Login returns token", vendor_token is not None, f"token={str(vendor_token)[:20]}...")
        
        # Wrong password
        payload = {"email": vendor_email, "password": "WrongPass123!"}
        response = requests.post(f"{BASE_URL}/auth/login", json=payload, timeout=30)
        log_test("Wrong password - should fail", response.status_code == 401, f"status={response.status_code}")
    except Exception as e:
        log_test("Vendor Auth", False, str(e))


def test_7_vendor_me():
    """Test 7: GET /api/auth/me - authenticated endpoint"""
    print("\n=== TEST 7: Vendor Profile (/auth/me) ===")
    if not vendor_token:
        log_test("GET: /api/auth/me", False, "Skipped - no token from test 6")
        return
    try:
        headers = {"Authorization": f"Bearer {vendor_token}"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers, timeout=30)
        log_test("GET /api/auth/me", response.status_code == 200, f"status={response.status_code}")
        
        # No token
        response = requests.get(f"{BASE_URL}/auth/me", timeout=30)
        log_test("GET /auth/me without token", response.status_code == 401, f"status={response.status_code}")
    except Exception as e:
        log_test("Vendor Me", False, str(e))


def test_8_vendor_listings():
    """Test 8: Vendor listings management"""
    print("\n=== TEST 8: Vendor Listings ===")
    global owned_listing_id
    if not vendor_token:
        log_test("Vendor listings", False, "Skipped - no token")
        return
    try:
        headers = {"Authorization": f"Bearer {vendor_token}"}
        
        # Add a listing as vendor
        payload = {
            "name": "Vendor Test Safari",
            "type": "safari",
            "location": "Nairobi",
            "price": 150,
            "currency": "USD",
            "description": "Vendor test description",
            "category": "Safari Package",
            "image_url": "https://example.com/test.jpg"
        }
        response = requests.post(f"{BASE_URL}/listings", json=payload, headers=headers, timeout=30)
        log_test("POST /api/listings (vendor)", response.status_code in [200, 201], f"status={response.status_code}")
        if response.status_code in [200, 201]:
            owned_listing_id = response.json().get('id')
        
        # Get my listings
        response = requests.get(f"{BASE_URL}/my-listings", headers=headers, timeout=30)
        log_test("GET /api/my-listings", response.status_code == 200, f"status={response.status_code}")
        
        # Get my listings without token
        response = requests.get(f"{BASE_URL}/my-listings", timeout=30)
        log_test("GET /my-listings without token", response.status_code == 401, f"status={response.status_code}")
    except Exception as e:
        log_test("Vendor Listings", False, str(e))


def test_9_vendor_stats():
    """Test 9: Vendor stats & leads"""
    print("\n=== TEST 9: Vendor Stats & Leads ===")
    if not vendor_token:
        log_test("Vendor Stats", False, "Skipped - no token")
        return
    try:
        headers = {"Authorization": f"Bearer {vendor_token}"}
        
        # Post a lead for the vendor's listing
        if owned_listing_id:
            payload = {
                "listing_id": owned_listing_id,
                "traveler_name": "Test Traveler",
                "traveler_phone": "+254758378729",
                "party_size": 1,
                "travel_date": "2026-08-01"
            }
            response = requests.post(f"{BASE_URL}/leads", json=payload, timeout=30)
            log_test("POST /api/leads for vendor listing", response.status_code in [200, 201], f"status={response.status_code}")
        
        # Get my stats
        response = requests.get(f"{BASE_URL}/my-stats", headers=headers, timeout=30)
        log_test("GET /api/my-stats", response.status_code == 200, f"status={response.status_code}")
        
        # Get my stats without token
        response = requests.get(f"{BASE_URL}/my-stats", timeout=30)
        log_test("GET /my-stats without token", response.status_code == 401, f"status={response.status_code}")
    except Exception as e:
        log_test("Vendor Stats", False, str(e))


def main():
    print("=======================================================================")
    print("OSARE Backend Test Suite - PostgreSQL Migration Verification")
    print("=======================================================================")
    print(f"Base URL: {BASE_URL}")
    print("-" * 80)
    
    test_funcs = [
        test_1_seed,
        test_2_listings,
        test_3_filters,
        test_4_crud,
        test_5_leads,
        test_6_vendor_auth,
        test_7_vendor_me,
        test_8_vendor_listings,
        test_9_vendor_stats
    ]
    
    for test_func in test_funcs:
        try:
            test_func()
        except Exception as e:
            print(f"\nâŒ CRITIAL ERROR in {test_func.__name__}: {str(e)}")
    
    # Summary
    print("\n" + "=" * 80)
    print("TEST SUMMARY")
    print("=" * 80)
    
    passed = sum(1 for r in test_results if r['passed'])
    failed = sum(1 for r in test_results if not r['passed'])
    total = len(test_results)
    
    print(f"\nTotal Tests: {total}")
    print(f"â„… Passed: {passed}")
    print(f"âÌ Failed: {failed}")
    
    if failed > 0:
        print("\nâŒ FAMBED TESTQ“ˆ ¤4(€€€€€€€™½ÈÈ¥¸Ñ•ÍÑ}É•ÍÕ±ÑÌè4(€€€€€€€€€€€¥˜¹½ÐÉlÁ…ÍÍ•tè4(€€€€€€€€€€€€€€€ÁÉ¥¹Ð¡˜ˆ€€´íÉlÍÑ•ÀuôèíÉl‘•Ñ…¥±Ìuôˆ¤4(€€€€4(€€€ÁÉ¥¹Ð ‰q¸ˆ€¬€ˆôˆ€¨€àÀ¤4(€€€€4(€€€¥˜™…¥±•€ôô€Àè4(€€€€€€€ÁÉ¥¹Ð ‹Â~:$10QMQLAMM„A½ÍÑÉ•ME0µ¥É…Ñ¥½¸ÍÕ•ÍÍ™Õ°¸ˆ¤4(€€€•±Í”è4(€€€€€€€ÁÉ¥¹Ð¡˜‹Šj£¾â<€í™…¥±•‘ôÑ•ÍÐ¡Ì¤™…¥±•¸I•Ù¥•Ü‘•Ñ…¥±Ì…‰½Ù”¸ˆ¤4(€€€€4(€€€ÁÉ¥¹Ð ˆôˆ€¨€àÀ¤4(€€€€4(€€€É•ÑÕÉ¸™…¥±•€ôô€À4(4(4)¥˜}}¹…µ•}|€ôô€‰}}µ…¥¹}|ˆè4(€€€ÍÕ•ÍÌ€ôµ…¥¸ ¤4(€€€•á¥Ð À¥˜ÍÕ•ÍÌ•±Í”€Ä¤4