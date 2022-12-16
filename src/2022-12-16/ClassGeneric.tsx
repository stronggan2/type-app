import React from 'react';

const ClassGeneric = () => {
  class User<T>{
    constructor(public name: string, public age: number, public phone: T) {}
    }

    const user1: User<number> = new User("gan", 20, 821012345678);
    const user2: User<string> = new User("gan", 20, "82-10-1234-5678");

  return (
    <div>
      
    </div>
  );
};

export default ClassGeneric;