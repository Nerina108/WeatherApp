import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

//below the test method is is used to test the
//app component, it takes two values, the first
//value is the description(string), the second
//value is the actually logic for the test
test('Snapshot test for the component', () => {
   const tree = renderer
   .create(<App/>)
   .toJSON();
   expect(tree).toMatchSnapshot()
})
//test to check whether the fetch api return with an error
test('the fetch fails with an error', () => {
   return fetch('http://api.openweathermap.org/data/2.5/weather?q=Kimberley&APPID=67e35a09a8c57ed654d879b941a23b30')
   .catch(e => expect(e).not.toBe('error'));
 });

//test to check if the weather API is returning
//an object value and if it fails
test('API return should be string', () => {
   return fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kimberley&APPID=67e35a09a8c57ed654d879b941a23b30`)
   .then(data => data.json())
   .then(dataReceived => {
       expect(typeof dataReceived).toBe('object')
   })
})

