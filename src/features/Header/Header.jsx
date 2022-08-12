import React from 'react';

export default function Header() {
  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://krot.info/uploads/posts/2022-02/1645047827_29-krot-info-p-foni-s-kotami-31.jpg')", height: '200px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Animal shelter</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}