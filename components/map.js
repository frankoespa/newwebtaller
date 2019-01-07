import React, { Component } from 'react';
import WrapperMap from './elements/wrappermap';

class Map extends Component {
    render() {
        return (
            <div id="mapa">
                <WrapperMap />
                <style jsx>{`
                        #mapa {
                            position: relative;
                            height: 500px
                        }
                        @media only screen and (min-width:0px) and (max-width:768px) {
                            #mapa {
                                height: 400px
                            }
                        }
                    `}</style>
            </div>
        );
    }
}

export default Map;

