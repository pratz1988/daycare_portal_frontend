import React, {Component} from 'react';

class HomePage extends Component {
    constructor(){
        super()
    }
    render(){
        return(
        <>
        <div className='bcImage imgDimn'> 
            <div>
                <div class="ui pointing secondary menu">
                    <a class="active item">Home</a>
                    <a class="item">For Parents</a>
                    <a class="item">For Teachers</a>
                    <div class="right menu"><a class="item">Login</a></div>
                </div>
                {/* <div class="ui segment"><img src="/images/wireframe/media-paragraph.png" width="200px"/></div> */}
            </div>

        </div>
        <div>br</div>
        {/* <div class="ui grid">
        <div class="four wide column">
          <div class="ui fluid vertical tabular menu">
            <a class="active item">Bio</a>
            <a class=" item">Pics</a>
            <a class="item">Companies</a>
            <a class="item">Links</a>
          </div>
        </div>
        <div class="stretched twelve wide column">
          <div class="ui segment">
            This is an stretched grid column. This segment will always match the tab height
          </div>
        </div>
      </div> */}

      
      </>
        )
    }
}

export default HomePage;