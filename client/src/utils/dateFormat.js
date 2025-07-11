// utils/dateFormat.js
import { format } from "date-fns";

export const formatPostDate = (date) => format(new Date(date), "MMMM d, yyyy");
export const formatCommentDate = (date) =>
  format(new Date(date), "MMM d, h:mm a");
export const formatProfileDate = (date) => format(new Date(date), "MMM yyyy");
