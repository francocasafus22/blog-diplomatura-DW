import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import InputForm, { TagsInput, TextAreaInput } from "../ui/InputForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/services/postServices";
import { toast } from "react-toastify";
import { newNoteSchema } from "@/schemas/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { editProfile } from "@/services/userService";


export default function EditProfileForm({open, setOpen}) {
    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm({resolver: zodResolver(newNoteSchema)});    

    const { mutate, isPending } = useMutation({
      mutationFn: editProfile,
      
      onSuccess: (data) => {
        toast.success(data.message);
        reset();
        setOpen(false);        
      },
      onError: (error) => {
        toast.error(error.message)
      },
    });

    const onSubmit = (data) => {         
        mutate(data)
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button className={"cursor-pointer"} variant={"default"} size={"sm"}>
            <Pen />
            Edit
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <DialogHeader>
                <DialogTitle>Edit your personal data</DialogTitle>
                <DialogDescription>
                Edit your data here. Click save when you&apos;re done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3">
                <InputForm
                label={"First name"}
                name={"firstName"}
                required
                placeholder={"Enter your name"}
                register={register}
                error={errors.firstName?.message}
                />
                <InputForm
                label={"Last name"}
                name={"lastName"}
                required
                placeholder={"Enter the last name"}
                register={register}
                error={errors.lastName?.message}
                />
                <InputForm
                label={"Username"}
                name={"username"}
                required
                placeholder={"Enter the username"}
                register={register}
                error={errors.username?.message}
                />
                <InputForm
                label={"Image"}
                name={"image"}
                required
                type={"file"}
                register={register}
                error={errors.image?.message}
                />
                <InputForm
                label={"Banner"}
                name={"banner"}
                required
                type={"file"}
                register={register}
                error={errors.banner?.message}
                />
            </div>
            <DialogFooter>
                <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
            </form>
        </DialogContent>
        </Dialog>
    );
}
