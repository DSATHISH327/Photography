import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Welcome = () => {
  useEffect(() => {
    Swal.fire({
      icon: 'success',
      title: '🎉 Welcome to My Website!',
      text: 'Thank you for visiting! 🙏',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Let’s Explore 🚀',
    });
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Welcome;
