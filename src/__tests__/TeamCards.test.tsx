import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios"
import Cards from "../Components/TeamCards";

const mockedAxios = axios as jest.Mocked<typeof axios>
it("Teams name check", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: [
      {
        "id": "chennai-super-kings",
        "teamName": "Chennai Super Kings",
        "winningYears": [
          2010,
          2011,
          2018
        ],
        "venue": "M. A. Chidambaram Stadium"
      },
      {
        "id": "delhi-capitals",
        "teamName": "Delhi Capitals",
        "winningYears": [],
        "venue": "Feroz Shah Kotla Ground"
      },
      {
        "id": "kings-xi-punjab",
        "teamName": "Kings XI Punjab",
        "winningYears": [],
        "venue": "IS Bindra Stadium"
      },
      {
        "id": "kolkata-knight-riders",
        "teamName": "Kolkata Knight Riders",
        "winningYears": [
          2012,
          2014
        ],
        "venue": "Eden Gardens"
      },
      {
        "id": "mumbai-indians",
        "teamName": "Mumbai Indians",
        "winningYears": [
          2013,
          2015,
          2017,
          2019
        ],
        "venue": "Wankhede Stadium"
      },
      {
        "id": "rajasthan-royals",
        "teamName": "Rajasthan Royals",
        "winningYears": [
          2008
        ],
        "venue": "Sawai Mansingh Stadium"
      },
      {
        "id": "royal-challengers-bangalore",
        "teamName": "Royal Challengers Bangalore",
        "winningYears": [],
        "venue": "M. Chinnaswamy Stadium"
      },
      {
        "id": "sunrisers-hyderabad",
        "teamName": "Sunrisers Hyderabad",
        "winningYears": [
          2016
        ],
        "venue": "Rajiv Gandhi Intl. Cricket Stadium"
      }
    ]
  });
  render(<Cards />);
  const cards = await screen.findAllByTestId('cards');
  expect(cards[0]).toHaveTextContent('Chennai Super Kings');
  expect(cards[1]).toHaveTextContent('Delhi Capitals');
  expect(cards[2]).toHaveTextContent('Kings XI Punjab');
  expect(cards[3]).toHaveTextContent('Kolkata Knight Riders');
  expect(cards[4]).toHaveTextContent('Mumbai Indians');
  expect(cards[5]).toHaveTextContent('Rajasthan Royals');
  expect(cards[6]).toHaveTextContent('Royal Challengers Bangalore');
  expect(cards[7]).toHaveTextContent('Sunrisers Hyderabad');

})

it("Venue name check", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: [
      {
        "id": "chennai-super-kings",
        "teamName": "Chennai Super Kings",
        "winningYears": [
          2010,
          2011,
          2018
        ],
        "venue": "M. A. Chidambaram Stadium"
      },
      {
        "id": "delhi-capitals",
        "teamName": "Delhi Capitals",
        "winningYears": [],
        "venue": "Feroz Shah Kotla Ground"
      },
      {
        "id": "kings-xi-punjab",
        "teamName": "Kings XI Punjab",
        "winningYears": [],
        "venue": "IS Bindra Stadium"
      },
      {
        "id": "kolkata-knight-riders",
        "teamName": "Kolkata Knight Riders",
        "winningYears": [
          2012,
          2014
        ],
        "venue": "Eden Gardens"
      },
      {
        "id": "mumbai-indians",
        "teamName": "Mumbai Indians",
        "winningYears": [
          2013,
          2015,
          2017,
          2019
        ],
        "venue": "Wankhede Stadium"
      },
      {
        "id": "rajasthan-royals",
        "teamName": "Rajasthan Royals",
        "winningYears": [
          2008
        ],
        "venue": "Sawai Mansingh Stadium"
      },
      {
        "id": "royal-challengers-bangalore",
        "teamName": "Royal Challengers Bangalore",
        "winningYears": [],
        "venue": "M. Chinnaswamy Stadium"
      },
      {
        "id": "sunrisers-hyderabad",
        "teamName": "Sunrisers Hyderabad",
        "winningYears": [
          2016
        ],
        "venue": "Rajiv Gandhi Intl. Cricket Stadium"
      }
    ]
  })
  render(<Cards />)
  const cards = await screen.findAllByTestId('cards');
  expect(cards[0]).toHaveTextContent('M. A. Chidambaram Stadium');
  expect(cards[1]).toHaveTextContent('Feroz Shah Kotla Ground');
  expect(cards[2]).toHaveTextContent('IS Bindra Stadium');
  expect(cards[3]).toHaveTextContent('Eden Gardens');
  expect(cards[4]).toHaveTextContent('Wankhede Stadium');
  expect(cards[5]).toHaveTextContent('Sawai Mansingh Stadium');
  expect(cards[6]).toHaveTextContent('M. Chinnaswamy Stadium');
  expect(cards[7]).toHaveTextContent('Rajiv Gandhi Intl. Cricket Stadium');

});

it("Winning Years check", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: [
      {
        "id": "chennai-super-kings",
        "teamName": "Chennai Super Kings",
        "winningYears": [
          2010,
          2011,
          2018
        ],
        "venue": "M. A. Chidambaram Stadium"
      },
      {
        "id": "delhi-capitals",
        "teamName": "Delhi Capitals",
        "winningYears": [],
        "venue": "Feroz Shah Kotla Ground"
      },
      {
        "id": "kings-xi-punjab",
        "teamName": "Kings XI Punjab",
        "winningYears": [],
        "venue": "IS Bindra Stadium"
      },
      {
        "id": "kolkata-knight-riders",
        "teamName": "Kolkata Knight Riders",
        "winningYears": [
          2012,
          2014
        ],
        "venue": "Eden Gardens"
      },
      {
        "id": "mumbai-indians",
        "teamName": "Mumbai Indians",
        "winningYears": [
          2013,
          2015,
          2017,
          2019
        ],
        "venue": "Wankhede Stadium"
      },
      {
        "id": "rajasthan-royals",
        "teamName": "Rajasthan Royals",
        "winningYears": [
          2008
        ],
        "venue": "Sawai Mansingh Stadium"
      },
      {
        "id": "royal-challengers-bangalore",
        "teamName": "Royal Challengers Bangalore",
        "winningYears": [],
        "venue": "M. Chinnaswamy Stadium"
      },
      {
        "id": "sunrisers-hyderabad",
        "teamName": "Sunrisers Hyderabad",
        "winningYears": [
          2016
        ],
        "venue": "Rajiv Gandhi Intl. Cricket Stadium"
      }
    ]
  })
  render(<Cards />)
  const cards = await screen.findAllByTestId('cards');
  expect(cards[0]).toHaveTextContent('2010 2011 2018');
  expect(cards[3]).toHaveTextContent('2012 2014');
  expect(cards[4]).toHaveTextContent('2013 2015 2017 2019');
  expect(cards[5]).toHaveTextContent('2008');
  expect(cards[7]).toHaveTextContent('2016');

});

it("Cards Snapshot Testing", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: [
      {
        "id": "chennai-super-kings",
        "teamName": "Chennai Super Kings",
        "winningYears": [
          2010,
          2011,
          2018
        ],
        "venue": "M. A. Chidambaram Stadium"
      },
      {
        "id": "delhi-capitals",
        "teamName": "Delhi Capitals",
        "winningYears": [],
        "venue": "Feroz Shah Kotla Ground"
      },
      {
        "id": "kings-xi-punjab",
        "teamName": "Kings XI Punjab",
        "winningYears": [],
        "venue": "IS Bindra Stadium"
      },
      {
        "id": "kolkata-knight-riders",
        "teamName": "Kolkata Knight Riders",
        "winningYears": [
          2012,
          2014
        ],
        "venue": "Eden Gardens"
      },
      {
        "id": "mumbai-indians",
        "teamName": "Mumbai Indians",
        "winningYears": [
          2013,
          2015,
          2017,
          2019
        ],
        "venue": "Wankhede Stadium"
      },
      {
        "id": "rajasthan-royals",
        "teamName": "Rajasthan Royals",
        "winningYears": [
          2008
        ],
        "venue": "Sawai Mansingh Stadium"
      },
      {
        "id": "royal-challengers-bangalore",
        "teamName": "Royal Challengers Bangalore",
        "winningYears": [],
        "venue": "M. Chinnaswamy Stadium"
      },
      {
        "id": "sunrisers-hyderabad",
        "teamName": "Sunrisers Hyderabad",
        "winningYears": [
          2016
        ],
        "venue": "Rajiv Gandhi Intl. Cricket Stadium"
      }
    ]
  });
  render(<Cards />);
  const cards = await screen.findAllByTestId('cards');
  for (const i of cards) {
    expect(i).toMatchSnapshot()
  }

})

// it("clickhandler", () => {
//   render(<Cards />)
//   const handleclick = jest.fn()
//   fireEvent.click(screen.getByTestId('cards'))
//   expect(handleclick).toHaveBeenCalledTimes(1)
// })
