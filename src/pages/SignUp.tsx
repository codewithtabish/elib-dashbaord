import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: api.signupMethod,
    onSuccess: () => {
      toast.success("Successfully login!");
      navigate("/dashboard/home");
    },
    onError: () => {
      toast.error("something went wrong ");
    },
  });

  const handleSignup = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef?.current?.value;

    if (!email || !password || !name) {
      toast.error("please enter both fields");
      return;
    }
    if (password.length < 6) {
      return toast.error("password must be at leat six caharacters ..");
    }
    mutation.mutate({ name, email, password });
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="mx-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Label htmlFor="first-name">Name</Label>
            <Input ref={nameRef} id="first-name" placeholder="Max" required />
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input ref={passwordRef} id="password" type="password" />
            </div>
            <Button type="submit" className="w-full" onClick={handleSignup}>
              <span className="mx-4">
                {mutation?.isPending && <Loader className="animate-spin" />}
              </span>
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-3 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default SignUpPage;
