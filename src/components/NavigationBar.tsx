/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

export default () =>
  <div className="NavigationBar">
    <table>
      <tbody>
        <tr>
          <td><Link to="/">Main</Link></td>
          <td><Link to="/settings">Settings</Link></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>