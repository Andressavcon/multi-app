import axios from 'axios';
import { useState } from 'react';

export const IPAddressFinder = () => {
  const [ip, setIp] = useState('');
  const [ipData, setIpData] = useState(null);

  const findIp = async () => {
    try {
      const response = await axios.get(`https://ipinfo.io/${ip}/json`);
      setIpData(response.data);
    } catch (error) {
      console.error('Error fetching IP address data: ', error);
    }
  };

  return (
    <section>
      <h2>IP Address Finder</h2>
      <input
        type="text"
        value={ip}
        onChange={(event) => setIp(event.target.value)}
        placeholder="Enter IP address"
      />
      <button onClick={findIp}>Find IP</button>
      {ipData && (
        <div>
          <p>
            <strong>IP:</strong>
            {ipData.ip}
          </p>
          <p>
            <strong>Location:</strong>
            {ipData.city}, {ipData.region},{ipData.country}{' '}
          </p>
          <p>
            <strong>ISP:</strong>
            {ipData.org}
          </p>
        </div>
      )}
    </section>
  );
};
