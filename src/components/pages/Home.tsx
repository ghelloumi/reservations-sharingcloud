import React from 'react';
import { PageLayout } from '../PageLayout';
import { IHome } from './_pages.interfaces';
import styled from 'styled-components';
import { isLoggedIn } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  div {
    flex-direction: column;
  }

  div.not__loggedIn {
    h1 {
      color: #5e5e5e;
    }

    p {
    }

    > div {
      width: 100%;
      height: 2.5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        border: 1px solid #e6e6e6;
        background: #f8f8f8;
        cursor: pointer;
        transition: all 200ms ease-in;
        text-decoration: none;
        width: 12rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #505050;
        font-weight: 500;

        &:hover {
          background: #e7e7e7c9;
          box-shadow: 0 0 1rem #d6d6d6;
        }
      }
    }
  }

  div.loggedIn {
  }
`;

const Home: React.FunctionComponent<IHome> = ({ from }) => {
  return (
    <PageLayout>
      <HomeContainer>
        {!isLoggedIn() ? (
          <div className="not__loggedIn">
            <h1>Welcome to meeting rooms reservation application</h1>
            <p>Please Login to your account to start</p>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        ) : (
          <div className="loggedIn">

          </div>
        )}
      </HomeContainer>
    </PageLayout>
  );
};

export default Home;
