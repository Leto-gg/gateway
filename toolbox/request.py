import requests

cid = "Qm12345"
api_key = "YOUR_API_KEY_HERE"

url = f"https://web3.storage/api/content/{cid}"
headers = {"Authorization": f"Bearer {api_key}"}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.content)
else:
    print(f"Error: {response.status_code} - {response.text}")