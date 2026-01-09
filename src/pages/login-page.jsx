import { PageLayout } from "../components/layouts";
import { LoginForm } from "../components/users";

function LoginPage() {
  return (
    <PageLayout>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-4">
          <h3 className="fw-light">Login</h3>
          <LoginForm />
        </div>
      </div>
    </PageLayout>
  )
}

export default LoginPage;
