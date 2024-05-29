import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export const Settings = () => {
    const [ settingsData, setSettingsData ] = useLocalStorage('userSettings', []);
    const [ overviewData, setOverviewData ] = useLocalStorage('userOverview', []);

    const location = useLocation();
    const firstWord = location.pathname.split('/')[1];

    const [ changeableData, setChangeableData ] = useState(settingsData.filter((entry: any) => entry.type === firstWord));
    const [ immutableData, setImmutableData ] = useState(overviewData[0].yearlyOverview.find((entry: any) => entry.month === 'may' && entry.year === 2024));
    

    const handleInputChange = (type: string, index: number, event: any) => {
        const inputValue = parseFloat(event.target.value);
        
        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            const updatedSettings = [...changeableData];
            updatedSettings[index].expected = inputValue;
            setChangeableData(updatedSettings);

            
        }
    };

    const handleSave = () => {
        const value = changeableData[0].expected;
        const index = settingsData.findIndex((entry: any) => entry.type === firstWord);
        console.log(index, value)
        const updatedSettingsData = [...settingsData];
        updatedSettingsData[index].expected = value;
        setSettingsData(updatedSettingsData)

        console.log('UPDATE', updatedSettingsData)
        setSettingsData(updatedSettingsData);

        //update the imutable part
        const income = immutableData.income;

        const updatedOverviewData = [...overviewData];
        updatedOverviewData[0].yearlyOverview.find((entry: any) => entry.month === 'may' && entry.year === 2024).details.find((entry: any) => entry.type.split('Details')[0] === firstWord).typeDetails[0].amount = income * (value / 100);
        setOverviewData(updatedOverviewData)
    }
    
  return (
    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {changeableData.map((entry: any, index: number) => (
                <div key={index} style={{ display: 'flex', gap: '12px'}}>
                    <label style={{ fontSize: '24px'}}>{entry.name}:</label>
                    <>
                        {entry.expectedType === 'amount' && <span style={{ fontSize: '24px'}}>$</span>}
                        <input style={{ fontSize: '24px', borderRadius: '6px', backgroundColor: 'white', color: 'black'}} type="number" value={entry.expected} onChange={(e) => handleInputChange(entry.name, index, e)} />
                        {entry.expectedType === 'rate' && <span style={{ fontSize: '24px'}}>%</span>}
                    </>
                </div>
            ))}
        </div>
        <div>
            <NavLink to={'/'}>
                <button onClick={() => handleSave()} style={{ backgroundColor: 'green', textTransform: 'uppercase', letterSpacing: '1.12px' }}>Save</button>
            </NavLink>
        </div>
    </div>
    
  )
}
