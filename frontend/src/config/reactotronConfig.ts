import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'React JS Demo' })
	.use(reactotronRedux())
	.connect();

export default reactotron;
