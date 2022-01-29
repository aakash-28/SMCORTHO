import { history } from '../redux/store';

export function navigateLogin() {
  console.log("navigate Function invoked")
  history.push('/public/sign-in');
}
