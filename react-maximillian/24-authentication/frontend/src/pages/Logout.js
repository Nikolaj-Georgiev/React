import { redirect } from "react-router-dom";
import { tokenRemover } from "../util/auth";

export function action() {
  tokenRemover();
  return redirect('/');
}