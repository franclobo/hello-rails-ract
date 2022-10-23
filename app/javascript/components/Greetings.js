import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetings';
import Greeting from './Greeting';

export default function Greetings() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);

  if (greetings.length === 0) {
    dispatch(fetchGreeting());
  }

  return (
    <div>
      {greetings.map((greeting) => (
        <div key={greeting.id}>
          <Greeting id={greeting.id} message={greeting.message} />
        </div>
      ))}
    </div>
  );
}
