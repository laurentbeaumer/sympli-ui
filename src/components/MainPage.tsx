import React, { useEffect, useState } from 'react';
import Repository from '../persistency/Repository';
import "./MainPage.css"


export default function QuoteMain(props: any) {
  const [occurences, setOccurences] = useState([["", "", ""]]);

  useEffect(() => {
    Repository.$Occurences.subscribe((occurences) => setOccurences(occurences));
  })

  return (
    <div className="MainPage">
      <table>
        <tbody>
          <th>
            <td>Search Engine</td>
            <td>Keyword</td>
            <td>Occurences</td>
          </th>
          {occurences.map((occurence: string[], index: number) => {
            return (
              <tr key={index}>
                <td>{occurence[0]}</td>
                <td>{occurence[1]}</td>
                <td>{occurence[2]}</td>
              </tr>);
          })}
        </tbody>
      </table>
    </div>)
}