/* DATA */
const data = {
  portfolios: [
    {
      _id: "sad87daasdhjdjsb",
      title: "Job in Netcentric",
      company: "Netcentric",
      companyWebsite: "www.google.com",
      location: "Spain, Barcelona",
      jobTitle: "Engineer",
      description: "Doing something, programing....",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
    },
    {
      _id: "da789ad1",
      title: "Job in Siemens",
      company: "Siemens",
      companyWebsite: "www.google.com",
      location: "Slovakia, Kosice",
      jobTitle: "Software Engineer",
      description: "Responsoble for parsing framework for JSON medical data.",
      startDate: "01/01/2011",
      endDate: "01/01/2013",
    },
    {
      _id: "sadcxv9",
      title: "Work in USA",
      company: "WhoKnows",
      companyWebsite: "www.google.com",
      location: "USA, Montana",
      jobTitle: "Housekeeping",
      description: "So much responsibility....Overloaaaaaad. NOOOOOOO",
      startDate: "01/01/2010",
      endDate: "01/01/2011",
    },
  ],
}

// resolvers provides a resolver function for each API endpoint
exports.portfolioQueries = {
  portfolio: ( root, { id } ) => {
    //find is an iterable method. Per each portfolio, find the portfolio with the provided portfolio _id.
    const portfolioFound = data.portfolios.find(
      //find the fist portfolio element who's _id is the same as the one provided as input.
      ( portfolio ) => portfolio._id === id,
    )
    return portfolioFound
  },
  portfolios: () => {
    return data.portfolios
  },
}

exports.portfolioMutations = {
  createPortfolio: ( root, { input } ) => {
    const _id = require( "crypto" ).randomBytes( 10 ).toString( "hex" )
    const newPortfolio = { ...input }
    newPortfolio._id = _id
    data.portfolios.push( newPortfolio )
    return newPortfolio
  },
}
