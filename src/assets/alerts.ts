import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const swalWithFlowbiteButtons = MySwal.mixin({
  customClass: {
    confirmButton:
      'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    cancelButton:
      'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  },
  buttonsStyling: false,
});

export const closeAlert = async () => Swal.close();

interface IAlertData {
  title?: string;
  message?: string;
}

export const afterCancelAlert = (props?: IAlertData) => {
  const { title = 'Cancelled', message = 'Your table row is safe :)' } =
    props ?? {};
  swalWithFlowbiteButtons.fire(title, message, 'error');
};

export const afterSuccessAlert = (props?: IAlertData) => {
  const { title = 'Deleted!', message = 'Your table row has been deleted.' } =
    props ?? {};
  swalWithFlowbiteButtons.fire(title, message, 'success');
};
export const afterErrorAlert = (props?: IAlertData) => {
  const { title = 'Oops...', message = 'Something went wrong!' } = props ?? {};
  swalWithFlowbiteButtons.fire({
    icon: 'error',
    title,
    text: message,
  });
};

export const runDeleteAlert = async (): Promise<{
  isConfirmed: boolean;
  isCancel: boolean;
} | void> => {
  try {
    const result = await swalWithFlowbiteButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    });

    //   if (result.isConfirmed) {
    //     await swalWithFlowbiteButtons.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     );
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     await swalWithFlowbiteButtons.fire(
    //       'Cancelled',
    //       'Your imaginary file is safe :)',
    //       'error'
    //     );
    //   }
    return {
      isConfirmed: result?.isConfirmed ? true : false,
      isCancel: result?.dismiss ? true : false,
    };
  } catch (error) {
    // Handle any errors that occur during the Swal.fire calls
    console.error('Error in Swal:', error);
  }
};

export const runLoadingAlert = () =>
  MySwal.fire({
    title: 'Please Wait!',
    html: 'Processing...',
    allowOutsideClick: false,
    didOpen: () => {
      MySwal.showLoading();
    },
  });

interface IDeleteAlertOnApiSuccess {
  cancelAlertProps?: IAlertData;
  successAlertProps?: IAlertData;
  apiCall?: () => any;
}

export const deleteAlertOnApiSuccess = async ({
  successAlertProps,
  cancelAlertProps,
  apiCall,
}: IDeleteAlertOnApiSuccess) => {
  const deleteRes = await runDeleteAlert();
  if (deleteRes) {
    const { isConfirmed, isCancel } = deleteRes;
    if (isCancel) {
      afterCancelAlert(cancelAlertProps);
      return;
    } else if (isConfirmed) runLoadingAlert();
    await apiCall?.();
    closeAlert();
    afterSuccessAlert(successAlertProps);
  }
};

interface IErrorAlertOnApiFailure {
  errorAlertProps?: IAlertData;
}

export const errorAlertOnApiFailure = (props?: IErrorAlertOnApiFailure) => {
  const {
    errorAlertProps = { title: 'Oops...', message: 'Something went wrong!' },
  } = props ?? {};
  closeAlert();
  afterErrorAlert(errorAlertProps);
};

export const successAlertOnApiSuccess = (props?: IErrorAlertOnApiFailure) => {
  const {
    errorAlertProps = {
      title: 'Oops...',
      message: 'Data Changed Successfully',
    },
  } = props ?? {};

  closeAlert();
  swalWithFlowbiteButtons.fire({
    icon: 'success',
    title: errorAlertProps?.message,
    showConfirmButton: false,
    timer: 1500,
  });
};
