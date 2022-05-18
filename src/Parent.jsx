import React, { useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function Parent() {
  const [age, setAge] = React.useState(10);
  const [salary, setSalary] = React.useState(300000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button onIncrement={incrementAge}>Increment Age Button</Button>
      <Count text="salary" count={salary} />
      <Button onIncrement={incrementSalary}>Increment Salary Button</Button>
    </div>
  );
}

export default Parent;
