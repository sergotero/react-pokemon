import { PageLayout } from "../components/layouts";
import { LoginForm } from "../components/users";

function LoginPage() {
  return (
    <PageLayout>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <LoginForm />
        </div>
      </div>
    </PageLayout>
  )
}

export default LoginPage;
