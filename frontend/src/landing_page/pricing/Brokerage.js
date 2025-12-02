import React from "react";

function Brokerage() {
  return (
    <>
      <div class="container my-3 border-top p-5">
        <h2 class="mt-5 mb-5" style={{ color: "#16DB65" }}>
          Equity Pricing
        </h2>
        <table class="table table-striped border mb-5">
          <thead>
            <tr>
              <th style={{ color: "rgb(66, 66, 66)" }}> </th>
              <th style={{ color: "rgb(66, 66, 66)" }}>Equity Delivery</th>
              <th style={{ color: "rgb(66, 66, 66)" }}>Equity Intraday</th>
              <th style={{ color: "rgb(66, 66, 66)" }}>F&amp;O - Futures</th>
              <th style={{ color: "rgb(66, 66, 66)" }}>F&amp;O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-3" style={{ color: " rgb(102, 102, 102)" }}>
                Brokerage
              </td>
              <td class="py-3" style={{ color: " rgb(66, 66, 66)" }}>
                Zero Brokerage
              </td>
              <td class="py-3" style={{ color: " rgb(66, 66, 66)" }}>
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td class="py-3" style={{ color: " rgb(66, 66, 66)" }}>
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td class="py-3" style={{ color: " rgb(66, 66, 66)" }}>
                Flat Rs. 20 per executed order
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                STT/CTT
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.1% on buy &amp; sell
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.025% on the sell side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.02% on the sell side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                <ul class="mb-0">
                  <li style={{ color: "rgb(66, 66, 66)" }}>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li style={{ color: "rgb(66, 66, 66)" }}>
                    0.1% on sell side (on premium)
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Transaction charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                NSE: 0.00173%
                <br />
                BSE: 0
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                NSE: 0.03503% (on premium)
                <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                GST
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                SEBI charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Stamp charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.015% or ₹1500 / crore on buy side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.003% or ₹300 / crore on buy side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.002% or ₹200 / crore on buy side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container my-3 border-top p-5">
        <h2 class="mt-5 mb-5" style={{ color: "#16DB65" }}>
          Currency Pricing
        </h2>
        <table class="table table-striped border mb-5">
          <thead>
            <tr>
              <th style={{ color: "rgb(66, 66, 66)" }}> </th>
              <th style={{ color: "rgb(66, 66, 66)" }}>Currency futures</th>
              <th style={{ color: "rgb(66, 66, 66)" }}>Currency options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Brokerage
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.03% or ₹ 20/executed order whichever is lower
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹ 20/executed order
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                STT/CTT
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                No STT
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                No STT
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Transaction charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                NSE: 0.00035%
                <br />
                BSE: 0.00045%
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                NSE: 0.0311%
                <br />
                BSE: 0.001%
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                GST
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                SEBI charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Stamp charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.0001% or ₹10 / crore on buy side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.0001% or ₹10 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container my-3 border-top p-5">
        <h2 class="mt-5 mb-5" style={{ color: "#16DB65" }}>
          Commodity Pricing
        </h2>
        <table class="table table-striped border mb-5">
          <thead>
            <tr>
              <th style={{ color: "rgb(66, 66, 66)" }}></th>
              <th style={{ color: "rgb(66, 66, 66)" }}>Commodity futures</th>
              <th style={{ color: "rgb(66, 66, 66)" }}>Commodity options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Brokerage
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹ 20/executed order
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                STT/CTT
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.01% on sell side (Non-Agri)
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.05% on sell side
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Transaction charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                MCX: 0.0021% <br />
                NSE: 0.0001%
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                MCX: 0.0418% <br />
                NSE: 0.001%
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                GST
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                SEBI charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                Agri: <br />
                ₹1 / crore <br />
                Non-agri: <br />
                ₹10 / crore
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                ₹10 / crore
              </td>
            </tr>
            <tr>
              <td class="py-3" style={{ color: "rgb(102, 102, 102)" }}>
                Stamp charges
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.002% or ₹200 / crore on buy side
              </td>
              <td class="py-3" style={{ color: "rgb(66, 66, 66)" }}>
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-center p-3" style={{ fontSize: "24px" }}>
        <a
          href="#"
          style={{ textDecoration: "none", color: "#16DB65" }}
        >
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
      <div
        class="container p-5 mt-5 border-top"
        style={{ color: "rgb(66, 66, 66)" }}
      >
        <h4 class="mb-5" style={{ textAlign: "left" }}>
          Charges explained
        </h4>
        <div class="row">
          <div class="col-6 p-4">
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Securities/Commodities transaction tax
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&amp;O.
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              When trading at TradeNova, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Transaction/Turnover Charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Call &amp; trade
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at TradeNova including auto square off orders.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Stamp charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              NRI brokerage charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              <ul>
                <li>₹100 per order for futures and options.</li>
                <li>
                  For a non-PIS account, 0.5% or ₹100 per executed order for
                  equity (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              "Account with debit balance
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              "If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              "charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              <ul>
                <li>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Margin Trading Facility (MTF)
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              <ul>
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹30 + GST per pledge request per ISIN.
                </li>
              </ul>
            </p>
          </div>
          <div class="col-6 p-4">
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              GST
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              SEBI Charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              DP (Depository participant) charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Debit transactions of mutual funds &amp; bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Pledging charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              AMC (Account maintenance charges)
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,
              <a
                href="#"
                style={{ textDecoration: "none;", color: "#16DB65" }}
              >
                Click here
              </a>
            </p>
            <p class="py-1" style={{ fontSize: "12px" }}>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC,{" "}
              <a
                href="#"
                style={{ textDecoration: "none;", color: "#16DB65" }}
              >
                Click here
              </a>
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Corporate action order charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Off-market transfer charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              ₹25 per transaction.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Physical CMR request
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Payment gateway charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
              Delayed Payment Charges
            </h6>
            <p class="py-1" style={{ fontSize: "12px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.
              <a
                href="#"
                style={{ textDecoration: "none;", color: "#16DB65" }}
              >
                Learn more.
              </a>
            </p>
          </div>
          <h6 class="py-2 mr-5" style={{ fontSize: "16px" }}>
            Disclaimer
          </h6>
          <p class="py-1" style={{ fontSize: "12px" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="p-4">
          <h2 class="mb-5">Charges for Account Opening</h2>
          <table class="table table-striped border mb-5">
            <thead>
              <tr>
                <th style={{color: "rgb(66, 66, 66)"}}>Type of Account</th>
                <th style={{color: "rgb(66, 66, 66)"}}>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>Online account</td>
                <td style={{color: "rgb(66, 66, 66)"}}>
                  <span class="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>Offline account</td>
                <td style={{color: "rgb(66, 66, 66)"}}>
                  <span class="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>
                  NRI account (offline only)
                </td>
                <td style={{color: "rgb(66, 66, 66)"}}>₹ 500</td>
              </tr>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td style={{color: "rgb(66, 66, 66)"}}>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 mb-5">
          <h2 class="mt-5 mb-5">Charges for Optional Value Added Services</h2>
          <table class="table table-striped border">
            <thead>
              <tr>
                <th style={{color: "rgb(66, 66, 66)"}}>Service</th>
                <th style={{color: "rgb(66, 66, 66)"}}>Billing Frequency</th>
                <th style={{color: "rgb(66, 66, 66)"}}>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>Tickertape</td>
                <td style={{color: "rgb(66, 66, 66)"}}>Monthly / Annual</td>
                <td style={{color: "rgb(66, 66, 66)"}}>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>Smallcase</td>
                <td style={{color: "rgb(66, 66, 66)"}}>Per transaction</td>
                <td style={{color: "rgb(66, 66, 66)"}}>
                  Buy &amp; Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr>
                <td style={{color: "rgb(66, 66, 66)"}}>Kite Connect</td>
                <td style={{color: "rgb(66, 66, 66)"}}>Monthly</td>
                <td style={{color: "rgb(66, 66, 66)"}}>
                  Connect: 2000 | Historical: 2000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );}


export default Brokerage;