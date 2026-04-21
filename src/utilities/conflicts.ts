type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

function getDays(meets: string): string {
  if (!meets) return "";

  let i = 0;
  while (i < meets.length && /[A-Za-z]/.test(meets[i])) {
    i += 1;
  }

  return meets.slice(0, i);
}

function getTimeRange(meets: string): string {
  if (!meets) return "";

  const parts = meets.split(" ");
  return parts.length > 1 ? parts[1] : "";
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getStartEnd(meets: string): { start: number; end: number } | null {
  const range = getTimeRange(meets);
  if (!range) return null;

  const [start, end] = range.split("-");
  return {
    start: timeToMinutes(start),
    end: timeToMinutes(end),
  };
}

function haveSameDay(days1: string, days2: string): boolean {
  for (const day of days1) {
    if (days2.includes(day)) {
      return true;
    }
  }
  return false;
}

function timesOverlap(meets1: string, meets2: string): boolean {
  const time1 = getStartEnd(meets1);
  const time2 = getStartEnd(meets2);

  if (!time1 || !time2) return false;

  return time1.start < time2.end && time2.start < time1.end;
}

function coursesConflict(course1: Course, course2: Course): boolean {
  if (!course1.meets || !course2.meets) return false;
  if (course1.term !== course2.term) return false;

  const days1 = getDays(course1.meets);
  const days2 = getDays(course2.meets);

  return haveSameDay(days1, days2) && timesOverlap(course1.meets, course2.meets);
}

export function hasConflict(
  courseId: string,
  courses: { [key: string]: Course },
  selectedCourses: string[]
): boolean {
  const course = courses[courseId];

  for (const selectedId of selectedCourses) {
    if (selectedId !== courseId && coursesConflict(course, courses[selectedId])) {
      return true;
    }
  }

  return false;
}