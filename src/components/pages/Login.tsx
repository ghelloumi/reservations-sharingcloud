import React, { useEffect, useState } from 'react';
import { PageLayout } from '../PageLayout';
import { login } from '../../services/login.service';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IAuthenticationReducer } from '../../redux/login/_login.interfaces';
import styled from 'styled-components';
import Image from '../atoms/Image';
import { IMAGES, MOBILE_BREAKPOINT } from '../../utils/constants';
import { media } from '../../theme/responsive.config';
import Loader from '../atoms/Loader';

const LoginContainer = styled.div<{ submitted: boolean; password: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 8rem;
  background: #f2f2f2;
  box-shadow: 0 0 1rem #d5d4d4;

  > div {
    width: 50%;
    position: relative;

    &:first-child {
      img {
        height: 30rem;
        width: 100%;
      }
    }

    &:nth-child(2) {
      form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 100%;
        padding: 0 3rem;

        div {
          div {
            display: flex;
            align-items: baseline;
            flex-direction: column;

            label {
              font-weight: 600;
              color: dimgrey;
              margin: 0.2rem 0;
            }

            input {
              height: 2.5rem;
              width: 100%;
              border: 1px solid #dfdfdf;
              background: white;
              padding: 0.5rem 1rem;
              box-shadow: ${(props) =>
                props.submitted && !props.password
                  ? '0 0 0.2rem #f4433680'
                  : 'unset'};
            }
          }
          div.error__message {
            height: 2rem;
            margin-top: 0.5rem;
            span {
              font-size: 0.8rem;
              color: #f44336;
            }
          }
        }
        div.submit__form {
          position: relative;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 2rem;
          }

          button {
            width: 100%;
            height: 2.5rem;
            margin-top: 2rem;
            border: 1px solid #e6e6e6;
            background: #f8f8f8;
            cursor: pointer;
            outline: none;
            transition: all 200ms ease-in;

            &:hover {
              background: #e7e7e7c9;
              box-shadow: 0 0 1rem #d6d6d6;
            }
          }
        }
      }
    }
  }

  ${media.phone} {
    flex-direction: column;
    margin: 2rem 0.5rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      &:first-child {
        img {
          height: auto;
          width: 92%;
          margin: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 0 1rem #c3c3c3;
        }
      }

      &:nth-child(2) {
        form {
          position: relative;
          top: unset;
          left: unset;
          transform: unset;
          padding: 0 1rem;

          div.error__message {
            height: 1rem !important;
            margin-top: 0.1rem !important;
          }
          div.submit__form {
            height: 3.2rem;
            margin-bottom: 2rem;

            button {
              margin: 0;
            }
          }
        }
      }
    }
  }
`;

const Login: React.FunctionComponent = () => {
  const typedUseSelector: TypedUseSelectorHook<{
    authentication: IAuthenticationReducer;
  }> = useSelector;

  const { loggingIn } = typedUseSelector((state) => state.authentication);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: '',
    password: '',
    submitted: false,
  });

  const [mobileView, setMobileView] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    window.addEventListener('resize', () =>
      setMobileView(window.innerWidth <= MOBILE_BREAKPOINT)
    );

    return () => window.removeEventListener('resize', () => false);
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    setValues({ ...values, submitted: true });
    const { username, password } = values;
    if (username && password) {
      dispatch(login(username));
    }
  };

  const { submitted, username, password } = values;
  return (
    <PageLayout>
      <LoginContainer
        aria-label="Access to my account"
        password={password}
        submitted={submitted}
      >
        <div>
          <Image
            alt="Login image cover"
            src={mobileView ? IMAGES.meetingHor : IMAGES.meeting}
            className="LoginImage"
          />
        </div>
        <div>
          <form name="form" onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  aria-invalid={submitted && !username}
                  aria-describedby="username-help-text"
                  placeholder="Username..."
                  required
                />
              </div>
              <div className="error__message">
                {submitted && !username && (
                  <span id="username-help-text">Username is required</span>
                )}
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  aria-invalid={submitted && !username}
                  aria-describedby="password-help-text"
                  placeholder="Password..."
                  required
                />
              </div>
              <div className="error__message">
                {submitted && !password && (
                  <span id="password-help-text">Password is required</span>
                )}
              </div>
            </div>
            <div className="submit__form">
              {loggingIn ? <Loader /> : <button>Login</button>}
            </div>
          </form>
        </div>
      </LoginContainer>
    </PageLayout>
  );
};

export default Login;
