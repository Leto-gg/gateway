# proxy-gateway W.I.P.

This document explains the IPFS gateway with a built-in functionality for recording requested Content Identifiers (CIDs) for metrics purposes. The IPFS (InterPlanetary File System) gateway is a distributed, content-addressed file system that provides a fast, secure, and decentralized way of accessing and sharing data across the internet to the browser. 


![Proxy Gateway Architecture](https://user-images.githubusercontent.com/30084404/225565389-d78d75a7-7ee7-44c8-8ece-3793928c0f30.png)

This implementation acts as a Proxy-Gateway(gateway on top of a gateway) that is built on top of the Web3.Storage Superfast Gateway found [here](https://github.com/web3-storage/w3link)

The main purpose of the CID metrics feature is to keep track of the CIDs requested, providing anonymous but valuable insights into the usage patterns and helping in optimizing the performance and user experience of the IPFS gateway.

# Features
Request tracking: The gateway records every CID requested by users, along with a timestamp.
Metrics generation: The gateway generates metrics based on the frequency and recency of CID requests.
Data export: The metrics can be exported as CSV, JSON, or other formats for further analysis.


# Notes 
Web3.Storage is not technically a IPFS Gateway but a bunch of caching layers built on top of the various IPFS Gateways. We are adding more CF layers! This is an act of caching layers built on top of eachother... 

# proxy-gateway

`proxy-gateway` is an open-source project that provides an anonymous proxy for the IPFS gateway. The goal of this project is to allow users to access IPFS content without revealing their IP addresses or other identifiable information. The project is built using Node.js and Express and is designed to be easy to set up and use.

## Features

- Anonymously access IPFS content through the gateway.
- Keeps user information private by not logging IP addresses or other identifiable information.
- Lightweight and easy to deploy.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

## Getting Started

To set up and run `proxy-gateway`, follow these steps:

1. Clone the repository:
