import { JSX, useState } from "react";
import { AppTitle } from "../atoms/AppTitle";
import { SignupBasicDataForm } from "../organisms/SignupBasicDataForm";
import { Link, useNavigate } from "react-router-dom";
import { ISignupBasicInfoPayload, IUserAddressInfo } from "../../types/user";
import { setUser } from "../../utils/setUser";
import { setUserSession } from "../../utils/setUserSession";
import { SignupAddressDataForm } from "../organisms/SignupAddressDataForm";

enum ESignupSteps {
  basicData = "basicData",
  addressData = "addressData",
}

export const Signup = (): JSX.Element => {
  const navigate = useNavigate();
  const [basicData, setBasicData] = useState<ISignupBasicInfoPayload>();
  const [signupSteps, setSignupSteps] = useState<ESignupSteps>(
    ESignupSteps.basicData
  );

  const setNextStep = (data: ISignupBasicInfoPayload) => {
    setBasicData(data);

    setSignupSteps(ESignupSteps.addressData);
  };

  const saveUserData = (data: IUserAddressInfo) => {
    if (basicData) {
      const { password, ...rest } = basicData;

      setUser({
        ...rest,
        password,
        address: data,
      });

      setUserSession({
        ...rest,
        address: data,
      });

      navigate("/session/dashboard");
    }
  };

  return (
    <div className="self-center bg-[#f3f3f3c9] rounded-md h-[98vh] overflow-auto w-full max-w-[500px] p-4 flex flex-col gap-4">
      <AppTitle classesList={["text-center"]}>Criar conta</AppTitle>

      <div>
        {signupSteps === ESignupSteps.basicData ? (
          <SignupBasicDataForm setBasicData={setNextStep} />
        ) : (
          <SignupAddressDataForm setAddressData={saveUserData} />
        )}
      </div>

      <div className="flex flex-col justify-center border-t border-[#3e6f51]">
        <div className="self-center pt-4">
          <Link to="/login" className="text-[#3e6f51] uppercase font-semibold">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
};
