import React from 'react';
import user1 from '../../Assets/images/avatar1.png';
import user2 from '../../Assets/images/avatar2.png';
import user3 from '../../Assets/images/avatar3.png';

const Team = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <article className="mw5 center pa3 pa4-ns">
                        <div className="tc">
                            <img src={user1} className="br-100 dib ba b--white pa2" title="Photo COO" />
                            <h1 className="f4 white mb2">Mimi W.</h1>
                            <h2 className="f5 fw4 white mt0 i">CCO (Chief Cat Officer)</h2>
                        </div>
                    </article>
                </div>
                <div className="col-md">
                    <article className="mw5 center pa3 pa4-ns">
                        <div className="tc">
                            <img src={user2} className="br-100 dib ba b--white pa2" title="Photo COO" />
                            <h1 className="f4 white mb2">Mimi W.</h1>
                            <h2 className="f5 fw4 white mt0 i">CCO (Chief Cat Officer)</h2>
                        </div>
                    </article>
                </div>
                <div className="col-md">
                    <article className="mw5 center pa3 pa4-ns">
                        <div className="tc">
                            <img src={user3} className="br-100 dib ba b--white pa2" title="Photo COO" />
                            <h1 className="f4 white mb2">Mimi W.</h1>
                            <h2 className="f5 fw4 white mt0 i">CCO (Chief Cat Officer)</h2>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Team;