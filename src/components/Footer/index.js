import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center" style={{ backgroundColor: '#212529', minHeight: '30px' }}>
                <div>
                    <p style={{ color: '#f1f2f3' }}><span>Maromo | Copyright © 2020 <a href="https://mit-license.org/">MIT Licence</a></span></p>
                </div>
            </footer >
        );
    }
}



