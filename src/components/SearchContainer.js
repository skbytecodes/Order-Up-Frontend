import React from 'react'
import SearchPage from './SearchPage'
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';

function SearchContainer() {
    const showAuthPage = useSelector((state) => state.showAuthPage);
  return (
    <>
        {showAuthPage ? (
        <div>
          <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              zIndex: 10,
            }}>

          </div>
          <LoginPage isOpen={1} />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <SearchPage />
          </div>
        </div>
      ):(
        <div>
         <SearchPage />
        </div>
      )}
    </>
  )
}

export default SearchContainer