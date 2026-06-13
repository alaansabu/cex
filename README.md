<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/9fb5e3b8-9366-4026-9608-f222164e6437" />

AI-POWERED CENTRALIZED EXCHANGE SIMULATION

An advanced simulation environment of a Centralized Exchange (CEX) where autonomous AI agents trade simulated assets. These agents employ various trading strategies to dynamically drive stock prices up or down, mimicking real-world market liquidity, volatility, and order-book mechanics.


CORE OVERVIEW

This project simulates a high-frequency trading environment populated entirely by AI agents. Instead of relying on traditional stochastic models to generate price movement, the market price is purely driven by agent demand, order execution, and sentiment.

Key Features:
- Autonomous AI Agents: Multiple agent profiles (Whales, Day Traders, Arbitrageurs, Panic Sellers) with distinct risk tolerances and decision-making logic.
- Order Book Engine: A fully functional, low-latency limit order book matching buy and sell orders based on price-time priority.
- Dynamic Price Discovery: Price swings are organic, reacting directly to agent market orders and liquidity depth.
- Sentiment Cycles: Built-in macroeconomic or news-feeding triggers that alter AI agent risk appetite, causing coordinated pumps or dumps.

1. The Matching Engine
The core CEX engine processes standard order types:
- Limit Orders: Placed in the order book at a specific price.
- Market Orders: Executed instantly against the best available bids or asks.

2. AI Trading Strategies (Price Drivers)
Agents look at order book depth, historical price trends, and random noise parameters to execute trades:
- Bullish Accumulators: Aggressively buy undervalued stocks, creating upward support levels.
- Bearish/Short Sellers: Sell into bids or borrow/short assets to drive prices down.
- Market Makers: Provide liquidity by placing tight bid-ask spreads, stabilizing high volatility.



