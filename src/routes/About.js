import React from 'react'

import { Header, AboutUs, Footer } from '../components/index'
import { Loader } from '../ui/Loader/Loader'

class About extends React.Component {
  state = {
    isLoading: false,
  }

  render() {
    const { isLoading } = this.state

    return (
      <div className="wrapper">
        <Header />
        {isLoading ? <Loader /> : <AboutUs />}
        <Footer />
      </div >
    )
  }
}

export default About;
