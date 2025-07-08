'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { subjects } from '@/constants';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('subject') || '';

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    setTimeout(() => {
      let newUrl = '';
      if (subject === 'all') {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['subject'],
        });

        router.push(newUrl, { scroll: false });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'subject',
          value: subject,
        });
        router.push(newUrl, { scroll: false });
      }
    }, 300);
  }, [subject, router, query, searchParams]);

  return (
    <Select onValueChange={(value) => setSubject(value)} value={subject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
