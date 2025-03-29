import React from 'react'
import http from '../../../../core/services/interceptor';
import { useQuery } from '@tanstack/react-query';
import { Select } from 'antd';
import { GrShareOption } from 'react-icons/gr';

const CourseTech = () => {

    const getList = async () => {
        const res = await http.get("/Home/GetTechnologies");
        return res;
      };
    
      const { data } = useQuery({
        queryKey: ["tech"],
        queryFn: getList,
      });
    
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    
      const options =data?.slice(1,15).map((item) =>({ label: item.techName, value: item.techName }));

  return (
    <div className="flex flex-col space-y-1 px-4">
    <div className="text-xs sm:text-sm  flex items-center gap-2 ">
    <GrShareOption className="text-2xl" />
    نحوه برگزاری
    </div>
    <Select
      mode="tags"
      style={{
        width: "100%",
        fontFamily: "yekan",
        fontSize: "12px",
      }}
      placeholder="انتخاب کنید"
      onChange={handleChange}
      dropdownStyle={{ fontFamily: "yekan" }}
      options={options}
    />
  </div>
  )
}

export default CourseTech