import { PageLayout } from "../components/layouts";
import { RegisterForm } from "../components/users";

function RegisterPage() {
  return (
    <PageLayout>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <RegisterForm />
        </div>
      </div>
    </PageLayout>
  )
}

export default RegisterPage;
