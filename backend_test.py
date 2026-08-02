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
