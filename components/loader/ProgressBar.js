import React from 'react';
import NProgress from 'nprogress';
import Router from "next/router";

/* eslint-disable react/prefer-stateless-function */
class ProgressBar extends React.Component {
    timer = null;

    routeChangeStart = () => {
        NProgress.set(0.3);
        NProgress.start();
    };

    routeChangeEnd = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            NProgress.done(true);
        }, 200);
    };

    render() {
        return (
            <style jsx global>{`
        #nprogress {
          pointer-events: none;
          background: white;
          height: 100vh;
          width: 100%;
        }
        #nprogress .bar {
          background: white;
          mix-blend-mode: difference;
          position: fixed;
          z-index: 1031;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
      `}</style>);
    }

    componentDidMount() {
        Router.events.on('routeChangeStart', this.routeChangeStart);
        Router.events.on('routeChangeComplete', this.routeChangeEnd);
        Router.events.on('routeChangeError', this.routeChangeEnd);
    }
}

export default ProgressBar;