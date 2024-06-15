import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../components/utils/validations';
import Input from '../../components/user/common/form/Input';
import SubmitButton from '../../components/user/common/form/SubmitButton';
import { login } from '../Api/adminAPI';
import { useAdminContext } from '../components/DashboardContextProvider';
import { dashboardInfo } from '../data';
import { commonStyleClasses } from '../components/utils';
import { getErrorMessage } from '../../utils/errorHandler';

const DashboardLogin = () => {
  const navigation = useNavigate();
  // @ts-ignore
  const { loginAdmin, logoutAdmin } = useAdminContext();
  const [loggingIn, setLoggingIn] = useState(false);

  const formMethods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const logout = urlParams.get('logout');
    if (logout === 'true') {
      localStorage.removeItem('token')
      logoutAdmin();
      toast.success(`${dashboardInfo.userTitle} Logged out, successfully!`);
    }
  }, []);

  const handleLogin = async (data: any) => {
    setLoggingIn(true);
    try {
      const response = await login(data);
      toast.success(`${dashboardInfo.userTitle} Login successful`);
      localStorage.setItem('token', response.token)
      loginAdmin(response.admin);
      navigation(`${dashboardInfo.startRouteLink}`);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className={commonStyleClasses("courses", null, true).parentDiv}>
      <h3 className='text-xl mb-10 text-center'>{dashboardInfo.name} Login</h3>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleLogin)} className='flex flex-col justify-center items-center'>
          <Input
            title="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            className='w-10/12'
          />
          <Input
            title="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            className='w-10/12'
          />
          <SubmitButton
            title="Sign In"
            loadingTitle="Signing In..."
            isLoading={loggingIn}
            className="mb-6 w-2/3 sm:w-1/3 cursor-pointer rounded-md border border-primary px-5 py-3 text-base font-medium  transition bg-textColor text-bgColor flex justify-center items-center"
          >
            {loggingIn && <span className='text-bgColor animate-spin text-2xl mr-1'><FaSpinner /></span>}
          </SubmitButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default DashboardLogin;