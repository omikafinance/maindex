import { useState, useEffect } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Select, Spinner } from '@chakra-ui/react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Nav from "../../components/appnav";
import type { NextPage } from 'next';
// Other components, states, and handlers go here

const App: NextPage = () => {
  const [pair, setPair] = useState('BTC/USD');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch stats from API
    // setStats(response.data)
    // setLoading(false)
  }, [pair]);

  const handlePairChange = (event) => {
    setPair(event.target.value);
  };

  return (
    <div>
      <Nav />
      <div>
      <Box display={{ base: "block", lg: "flex" }}>
        {/* Left section */}
        <Box flexBasis={{ base: "100%", lg: "75%" }}>
          <Box p={5}>
            <Select placeholder="Select pair" onChange={handlePairChange}>
              <option value="BTC/USD">BTC/USD</option>
              <option value="ETH/USD">ETH/USD</option>
              <option value="BNB/USD">BNB/USD</option>
              <option value="LINK/USD">LINK/USD</option>
            </Select>
            {loading ? <Spinner /> : <div>{/* display stats here */}</div>}
          </Box>

          {/* TradingView widget */}
          {pair && (
            <AdvancedRealTimeChart
              symbol={pair}
              theme="dark"
              autosize
              style={{display: {base: "none", lg: "block"}}}
            />
          )}

          {/* Tabbed section: positions, orders, trade history */}
          <Tabs>
            <TabList>
              <Tab>Positions</Tab>
              <Tab>Orders</Tab>
              <Tab>Trade History</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* Positions content */}
              </TabPanel>
              <TabPanel>
                {/* Orders content */}
              </TabPanel>
              <TabPanel>
                {/* Trade History content */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Right section */}
        <Box className="p-2" flexBasis={{ base: "100%", lg: "25%" }}>
          {/* Tabbed section: long, short, swap */}
          <Tabs variant='soft-rounded' colorScheme="teal">
  <TabList>
    <Tab>Long</Tab>
    <Tab>Short</Tab>
    <Tab>Swap</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      {/* Long content: market, limit, trigger */}
      <Tabs>
      <TabList bg="blue.200" h="60px">

          <Tab>Market</Tab>
          <Tab>Limit</Tab>
          <Tab>Trigger</Tab>
        </TabList>

        <TabPanels>
          <TabPanel bg="gray.200">
            {/* Market content */}
          </TabPanel>
          <TabPanel>
            {/* Limit content */}
          </TabPanel>
          <TabPanel>
            {/* Trigger content */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabPanel>

    <TabPanel>
      {/* Short content: market, limit, trigger */}
      <Tabs>
        <TabList>
          <Tab>Market</Tab>
          <Tab>Limit</Tab>
          <Tab>Trigger</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {/* Market content */}
          </TabPanel>
          <TabPanel>
            {/* Limit content */}
          </TabPanel>
          <TabPanel>
            {/* Trigger content */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabPanel>

    <TabPanel>
      {/* Swap content: market, limit, trigger */}
      <Tabs>
        <TabList>
          <Tab>Market</Tab>
          <Tab>Limit</Tab>
          <Tab>Trigger</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {/* Market content */}
          </TabPanel>
          <TabPanel>
            {/* Limit content */}
          </TabPanel>
          <TabPanel>
            {/* Trigger content */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabPanel>
  </TabPanels>
</Tabs>

        </Box>
      </Box>
      </div>
    </div>
  );
};

export default App;
