import { useState, useEffect,ChangeEvent  } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Select, Spinner,Text } from '@chakra-ui/react';
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

  const handlePairChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPair(event.target.value);
  };

  return (
    <div className="bg-linen">
      <Nav />
      <div>
      <Box display={{ base: "block", lg: "flex" }} className="bg-linen">
        {/* Left section */}
        <Box flexBasis={{ base: "100%", lg: "75%" }} className="bg-linen">
        <Box p={5} className="flex flex-col lg:flex-row justify-between space-x-4">
        <Box className="lg:w-1/3 ">
  <Select placeholder="Select pair" onChange={handlePairChange} >
    <option value="BTC/USD">BTC/USD</option>
    <option value="ETH/USD">ETH/USD</option>
    <option value="BNB/USD">BNB/USD</option>
    <option value="LINK/USD">LINK/USD</option>
  </Select>
</Box>

    <Box className="flex-grow">
      {loading ? <Spinner /> : <div>{/* display stats here */}</div>}
    </Box>
    {/* <Box className="flex-grow">yoo</Box>
    <Box className="flex-grow">yoo</Box> */}
  </Box>

          {/* TradingView widget */}
          {pair && (
            <Box className="hidden lg:block flex-1 h-full">
            <AdvancedRealTimeChart
              symbol={pair}
              theme="dark"
              autosize
            />
          </Box>
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
      <Tabs variant='soft-rounded'>
      <TabList  h="60px">

          <Tab>Market</Tab>
          <Tab>Limit</Tab>
          <Tab>Trigger</Tab>
        </TabList>

        <TabPanels>
          <TabPanel >
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
      <Box className="flex flex-column justify-between">
       <Text className="font-bold">Useful Links</Text>

      </Box>
    </TabPanel>

    <TabPanel>
      {/* Short content: market, limit, trigger */}
      <Tabs variant='soft-rounded'>
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
      <Tabs variant='soft-rounded'>
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
