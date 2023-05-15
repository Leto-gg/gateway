# Proxy-Gateway W.I.P.

This is an implementation of an IPFS Gateway what anonymously tracks the volume of requests of IPFS objects/CID's. 
The main purpose of the CID metrics feature is to keep track of the CIDs requested, providing anonymous but valuable insights into the usage patterns and helping in optimizing the performance and user experience of the IPFS gateway.

![Proxy Gateway Architecture](https://user-images.githubusercontent.com/30084404/225565389-d78d75a7-7ee7-44c8-8ece-3793928c0f30.png)




## Features

- Anonymously access IPFS content through the gateway.
- Keeps user information private by not logging IP addresses or other identifiable information.
- Lightweight and easy to deploy.

Request tracking: The gateway records every CID requested by users, along with a timestamp.
Metrics generation: The gateway generates metrics based on the frequency and recency of CID requests.
Data export: The metrics can be exported as CSV, JSON, or other formats for further analysis.

## Switching Gateways

If you already have a program/application using an IPFS Gateway, its is very simple to switch to our gateway simply by chaning the address of your Gateway to the Leto Gateway located at "leto.gg/ipfs/cid".

## Using an IPFS HTTP Gateway

Accessing data stored on IPFS is straightforward through the use of various IPFS HTTP gateways. Given that IPFS is a decentralized, peer-to-peer network, any public HTTP gateway can be utilized to retrieve your data. For the purposes of this guide, we'll be using the gateway provided by Leto.gg. Notably, this service is built upon the Web3.Storage Superfast Gateway. In addition to retrieving your data, it also provides you with valuable anonymous metrics.

## Issues and Testing

If you find any bugs, feel free to reach out/make an issues!
