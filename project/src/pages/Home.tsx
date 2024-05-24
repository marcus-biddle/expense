import React from 'react'

export const Home = () => {
  return (
    <div>
        <div style={{ textAlign: 'left', marginBottom: '32px'}}>
            <p>Hello, Marcus!</p>
            <p>Here is your Finance Overview for May</p>
        </div>
        <div style={{ display: 'flex', backgroundColor: '#FFFFFF', color: 'black', justifyContent: 'space-evenly', borderRadius: '10px', alignItems: 'center', padding: '24px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.8)'}}>
            <div>
                <div style={{ color: '#008080', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2.5px'}}>Income</div>
                <div style={{ color: '#003366', fontSize: '2.2em', fontWeight: 'bold'}}>2000</div>
            </div>
            <div>
                <div style={{ color: '#008080', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2.5px'}}>Savings</div>
                <div style={{ color: '#003366', fontSize: '2.2em', fontWeight: 'bold'}}>5000</div>
            </div>
            <div>
                <div style={{ color: '#008080', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2.5px'}}>Expenses</div>
                <div style={{ color: '#003366', fontSize: '2.2em', fontWeight: 'bold'}}>1600</div>
            </div>
        </div>

        <div>
            <div style={{ textAlign: 'left'}}>
                <h3>Income</h3>
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
                        <th style={{ padding: '10px', borderBottom: '1px solid #E0E0E0', width: '45%' }}>Income Name</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #E0E0E0', width: '35%' }}>Total</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>% of Total Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 1</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 2</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 3</td>
                        </tr>
                        <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 4</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 5</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 6</td>
                        </tr> */}
                        <tr>
                        <td style={{ padding: '10px',  }}>Main Job</td>
                        <td  style={{ padding: '10px',  }}>2000</td>
                        <td style={{ padding: '10px',  }}>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                        {/* <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 1</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 2</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 3</td>
                        </tr>
                        <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 4</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 5</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #E0E0E0' }}>Data 6</td>
                        </tr> */}
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
        </div>
    </div>
  )
}
