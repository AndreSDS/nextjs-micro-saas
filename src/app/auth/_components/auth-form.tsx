"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const authForm = useForm();

  const handleSubmit = authForm.handleSubmit(async (data) => {
    try {
      await signIn("email", {
        email: data.email,
        redirect: false,
      });
      toast({
        title: "Check your email",
        description: "We sent you a magic link. Please check your email.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    }
  });

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Sign in with Magic Link
          </CardTitle>
          <CardDescription>
            Enter your email below to receive a magic link to sign in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                {...authForm.register("email")}
                className="w-full"
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <Button className="w-full" type="submit">
              Send Magic Link
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
