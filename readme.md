# proxy-gateway W.I.P.

This document explains the IPFS gateway with a built-in functionality for recording requested Content Identifiers (CIDs) for metrics purposes. The IPFS (InterPlanetary File System) gateway is a distributed, content-addressed file system that provides a fast, secure, and decentralized way of accessing and sharing data across the internet to the browser. 


This implementation acts as a Proxy-Gateway(gateway on top of a gateway) that is built on top of the Web3.Storage Superfast Gateway found [here](https://github.com/web3-storage/w3link)


![Proxy Gateway Architecture](https://user-images.githubusercontent.com/30084404/225565389-d78d75a7-7ee7-44c8-8ece-3793928c0f30.png)

The main purpose of the CID metrics feature is to keep track of the CIDs requested, providing anonymous but valuable insights into the usage patterns and helping in optimizing the performance and user experience of the IPFS gateway.



## Features

- Anonymously access IPFS content through the gateway.
- Keeps user information private by not logging IP addresses or other identifiable information.
- Lightweight and easy to deploy.

Request tracking: The gateway records every CID requested by users, along with a timestamp.
Metrics generation: The gateway generates metrics based on the frequency and recency of CID requests.
Data export: The metrics can be exported as CSV, JSON, or other formats for further analysis.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

## Getting Started

To set up and run `proxy-gateway`, follow these steps:

1. Clone the repository:
