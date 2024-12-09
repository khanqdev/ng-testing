import { Framework, UnitTestBenefit } from "./model";

export const unitTestBenefit: UnitTestBenefit[] = [
  {
    label: 'Hỗ trợ bảo trì và mở rộng mã nguồn',
    expandContent: [
      'Unit test giúp kiểm tra từng thành phần nhỏ của ứng dụng, giúp phát hiện lỗi ngay từ giai đoạn phát triển ban đầu',
      'Kiểm tra kỹ từng chức năng riêng lẻ sẽ giúp giảm nguy cơ lỗi ảnh hưởng đến các phần khác của hệ thống'
    ]
  },
  {
    label: 'Tăng tốc độ phát triển phần mềm',
    expandContent: [
      'Unit test đảm bảo rằng các thay đổi hoặc bổ sung chức năng mới không gây lỗi cho các phần khác',
      'Khi sửa lỗi hoặc cập nhật tính năng, bạn có thể nhanh chóng phát hiện các vấn đề khác thông qua bộ unit test hiện có.'
    ]
  },
  {
    label: 'Tăng tính tin cậy của sản phẩm',
    expandContent: [
      'Có unit test giúp lập trình viên an tâm rằng mã nguồn mới không phá vỡ các phần đã hoạt động ổn định.',
      'Thay vì kiểm tra thủ công, unit test được thực hiện tự động, tiết kiệm thời gian và công sức.'
    ]
  },
  {
    label: 'Tăng tính tin cậy của sản phẩm',
    expandContent: [
      'Unit test đảm bảo các chức năng luôn hoạt động đúng như mong đợi, ngay cả sau khi chỉnh sửa hoặc nâng cấp.',
      'Sản phẩm ít lỗi hơn sẽ mang lại trải nghiệm tốt hơn cho người dùng.'
    ]
  },
  {
    label: 'Hỗ trợ phát triển theo hướng TDD (Test-Driven Development, Viết Unit test trước khi viết code)'
  },
]


export const listFramework: Framework[] = [
  {
    name: 'Jest',
    img: './assets/Jest.jpg',
    hidden: false,
    feature: [
      'Phổ biến với React, nhưng hỗ trợ cả các framework khác như Angular và Vue.',
      'Tích hợp sẵn test runner, mocking, và snapshot testing.',
      'Cực kỳ nhanh và dễ cài đặt.'
    ]
  },
  {
    name: 'Jasmine',
    img: './assets/jasmine.png',
    hidden: false,
    feature: [
      'Được sử dụng rộng rãi, đặc biệt trong Angular.',
      'Cung cấp một API đơn giản để viết unit test và tích hợp mocking.',
      'Không yêu cầu cài đặt bổ sung.'
    ]
  },
  {
    name: 'Mocha',
    img: './assets/mocha-logo.svg',
    hidden: false,
    feature: [
      'Một framework test linh hoạt, cung cấp cấu trúc rõ ràng cho việc viết test.',
      'Không tích hợp mocking hay assertion (cần dùng kèm với thư viện như Chai, Sinon).'
    ]
  },
  {
    name: 'Karma',
    img: './assets/karma.png',
    hidden: true,
    feature: [
      'Một test runner chủ yếu dùng với Angular.',
      'Chạy test trên nhiều trình duyệt để đảm bảo tính tương thích.',
      'Tích hợp tốt với Jasmine và Mocha.'
    ]
  },
]
