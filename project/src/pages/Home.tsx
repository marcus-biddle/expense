import React from 'react'
import { NavLink } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export interface InfoDetail {
    name: string;
    amount: number;
    isPercentage: boolean;
    isBasedOnIncomeAmount?: boolean;
}

interface YearlyOverview {
    year: number;
    month: string;
    monthTotal: number;
    details: InfoDetail[];
}

export interface FinancialData {
    type: 'savings' | 'expense' | 'income';
    total: number;
    settings: InfoDetail[];
    yearOverview: YearlyOverview[];
}

const FinanceCard = ({
    title,
    total,
    details
}: { title: string, total: number, details: any}) => {
    console.log(title, total, details, 'FIN CARD');
    return (
        <div style={{ backgroundColor: '#008080', color: 'black', display: 'flex', flexDirection: 'column', borderRadius: '12px', margin: '32px 0'}}>
            <div style={{ backgroundColor: 'black', margin: '2px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', padding: '24px', color: '#FF7F50', textAlign: 'left', textTransform: 'uppercase', fontFamily: 'monospace', fontSize: '24px'}}>{title}</div>
            <div style={{ padding: '56px'}}>
                {/* <span style={{ textTransform: 'uppercase', fontFamily: 'monospace', fontSize: '32px', fontWeight: 'bolder', letterSpacing: '4.44px', color: ''}}>{title}</span> */}
                <div style={{ fontSize: '64px', fontFamily: 'monospace', color: 'black'}}>${total}</div>
                <table style={{ minHeight: '100px'}}>
                <tbody>
                    {details.typeDetails.map((detail: any, detailIndex: number) => (
                            <tr key={`${detailIndex}`} style={{ fontWeight: 'lighter' }}>
                                <td style={{ textAlign: 'left' }}>{detail.name}</td>
                                <td style={{ textAlign: 'right' }}>
                                    {detail.isPercentage ? `${detail.amount}%` : `$${detail.amount}`}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
                <div></div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '48px'}}>
                    <NavLink to={`/${title}/report`}>
                        <button style={{ backgroundColor: 'white', color: 'black'}}>View Report</button>
                    </NavLink>
                    <NavLink to={`/${title}/settings`}>
                        <button>Settings</button>
                    </NavLink>
                    
                </div>
            </div>
            
        </div>
    )
}

export const userSettings = [
    {
        type: 'savings',
        expected: 38,
        expectedType: 'rate', // rate || amount
        name: 'Expected Savings Rate'
    },
    {
        type: 'expenses',
        expected: 60,
        expectedType: 'rate', // rate || amount
        name: 'Expected Expense Rate'
    },
]

export const userFinanceOverview = [
    {
        totalIncome: 0,
        totalSavings: 0,
        totalExpenses: 0,
        totalDebt: 0,
        yearlyOverview: [
            {
                year: 2024,
                month: 'may',
                income: 2013,
                expense: 1700,
                savings: 700,
                debt: 0,
                details: [
                    {
                        type: 'savingsDetails',
                        typeDetails: [
                            {
                                name: 'Expected Savings',
                                amount: 1000,
                                isPercentage: false,
                            },
                            {
                                name: 'Savings to Income Rate',
                                amount: 60,
                                isPercentage: true,
                            },
                        ]
                    },
                    {
                        type: 'expensesDetails',
                        typeDetails: [
                            {
                                name: 'Expected Expenses',
                                amount: 1000,
                                isPercentage: false,
                            },
                            {
                                name: 'Expense to Income Rate',
                                amount: 60,
                                isPercentage: true,
                            },
                        ]
                    },
                    {
                        type: 'incomeDetails',
                        typeDetails: [
                            {
                                name: 'Expected Income',
                                amount: 4000,
                                isPercentage: false,
                            },
                        ]
                    },
                ]
            }
        ]
    }
]

export const userDataEntries: FinancialData[] = [
    {
        type: 'savings',
        total: 3000,
        settings: [
            {
                name: 'Expected Savings Rate',
                amount: 38,
                isPercentage: true
            },
        ],
        yearOverview: [
            {
                year: 2024,
                month: 'may',
                monthTotal: 2000,
                details: [
                    {
                        name: 'Expected Savings',
                        amount: 4000,
                        isPercentage: false,
                        isBasedOnIncomeAmount: true
                    },
                    {
                        name: 'Savings Rate',
                        amount: 40,
                        isPercentage: true,
                        isBasedOnIncomeAmount: true
                    },
                    {
                        name: 'Savings to Expense Rate',
                        amount: 60,
                        isPercentage: true,
                        isBasedOnIncomeAmount: false
                    },
                ]
            },
            // Add more months here for 2024
        ],
    },
    {
        type: 'expense',
        total: 10000,
        settings: [],
        yearOverview: [
            {
                year: 2024,
                month: 'may',
                monthTotal: 1750,
                details: [
                    {
                        name: 'Expected Expenses',
                        amount: 1300,
                        isPercentage: false
                    },
                    {
                        name: 'Expense to Income Rate',
                        amount: 60,
                        isPercentage: true
                    },
                    {
                        name: 'Expense Variance',
                        amount: -160,
                        isPercentage: false
                    },
                ]
            },
            // Add more months here for 2024
        ],
    },
    {
        type: 'income',
        total: 5000,
        settings: [],
        yearOverview: [
            {
                year: 2024,
                month: 'may',
                monthTotal: 6000, // Example total income for May
                details: [
                    {
                        name: 'Salary',
                        amount: 5000,
                        isPercentage: false
                    },
                    // Add more income details as needed
                ]
            },
            // Add more months here for 2024
        ],
    },
];

export const Home = () => {
    const [ settingsData, setSettingsData ] = useLocalStorage('userSettings', userSettings);
    const [ overviewData, setOverviewData ] = useLocalStorage('userOverview', userFinanceOverview);

    console.log(settingsData, overviewData)
    if (!settingsData || !overviewData) return null;

    const thisMonthOverview = overviewData[0].yearlyOverview.find((entry: any) => entry.month === 'may' && entry.year === 2024);

  return (
    <div>
        {/* <div style={{ textAlign: 'left', marginBottom: '32px'}}>
            <p>Hello, Marcus!</p>
            <p>Here is your Finance Overview for May</p>
        </div> */}

        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <FinanceCard
            title={'income'}
            total={thisMonthOverview.income}
            details={thisMonthOverview.details.find((entry: any) => entry.type === 'incomeDetails')}
            />
            <FinanceCard
            title={'savings'}
            total={thisMonthOverview.savings}
            details={thisMonthOverview.details.find((entry: any) => entry.type === 'savingsDetails')}
            />
            <FinanceCard
            title={'expenses'}
            total={thisMonthOverview.expense}
            details={thisMonthOverview.details.find((entry: any) => entry.type === 'expensesDetails')}
            />
            
            {/* {overviewData.map((entry: FinancialData) => (
                <FinanceCard
                type={entry.type}
                yearOverview={entry.yearOverview}
                key={entry.type}
            />
            ))} */}
        </div>

        {/* <div>
            <div style={{ textAlign: 'left'}}>
                <h3>Savings & Investing</h3>
                <table style={{ 
                    borderCollapse: 'collapse',
                    width: '100%',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    color: '#4A4A4A',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px'
                    }}>
                    <thead>
                        <tr>
                        <th style={{ padding: '10px', borderBottom: '1px solid #E0E0E0', width: '45%' }}>Savings Name</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #E0E0E0', width: '35%' }}>Total</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Savings to Debt Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Invest</td>
                        <td  style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>2000</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>100%</td>
                        </tr>
                        <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Savings</td>
                        <td  style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>2000</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>100%</td>
                        </tr>
                        <tr>
                        <td style={{ padding: '10px',  }}>Emergency</td>
                        <td  style={{ padding: '10px',  }}>2000</td>
                        <td style={{ padding: '10px',  }}>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> */}
    </div>
  )
}
