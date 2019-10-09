import { VM } from 'vm2';

export default (str, timeout = 1000) => {
  console.log(str);
  const sandboxedEnvironment = new VM({
    sandbox: {},
    timeout,
  });
  return sandboxedEnvironment.run(str);
};
