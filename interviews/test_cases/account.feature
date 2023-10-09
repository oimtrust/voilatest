Feature: Account

  Scenario: View account details
    Given I am logged in to my account
    When I click on the "Akun" link
    Then I should see my account details, such as my name, email address, and shipping address

  Scenario: View shipping address
    Given I am logged in to my account
    When I click "Lihat Alamat" button
    Then I should redirect to shipping address detail

  Scenario: Adding a New Address Successfully
    Given I am on the "Tambah Alamat" (Add Address) page
    When I fill in the following details:
      | Label Alamat            | Home Address      |
      | Nama Lengkap            | John Doe          |
      | No. Handphone           | 081345654567      |
      | Kota dan Kecamatan      | Jakarta, Kemang   |
      | Kode Pos                | 12345             |
      | Alamat Lengkap          | Jl. Example Street, No. 123 |
      | Catatan untuk kurir     | This is a delivery note |
      | Negara                  | Indonesia         |
      | Provinsi                | DKI Jakarta       |
    And I check the "Atur sebagai alamat utama" checkbox
    And I click the "Simpan" button
    Then I should see a success message confirming the address has been added
    And the new address should be displayed in my address list

  Scenario: Adding an Address with Incomplete Information
    Given I am on the "Tambah Alamat" (Add Address) page
    When I fill in the following details with missing information:
      | Label Alamat            | Work Address      |
      | Nama Lengkap            |                  |
      | No. Handphone           | 081344567654     |
      | Kota dan Kecamatan      | Malang, Lowokwaru |
      | Kode Pos                |                  |
      | Alamat Lengkap          | Jl. Example Street, No. 123 |
      | Catatan untuk kurir     |                    |
      | Negara                  | Indonesia         |
      | Provinsi                | Jawa Timur        |
    And I leave the "Atur sebagai alamat utama" checkbox unchecked
    And I click the "Simpan" button
    Then I should see error messages indicating the missing information
    And the address should not be added to my address list

  Scenario: Adding an Address and Canceling
    Given I am on the "Tambah Alamat" (Add Address) page
    When I fill in the following details:
      | Label Alamat            | Office Address    |
      | Nama Lengkap            | Jane Smith        |
      | No. Handphone           | 081345654567      |
      | Kota dan Kecamatan      | Rejang Lebong, Curup Tengah |
      | Kode Pos                | 67890             |
      | Alamat Lengkap          | Jl. Coba Street   |
      | Catatan untuk kurir     | This is a delivery note |
      | Negara                  | Indonesia         |
      | Provinsi                | Bengkulu        |
    And I check the "Atur sebagai alamat utama" checkbox
    And I click the "Batal" button
    Then I should be redirected to the previous page
    And the address should not be added to my address list

Feature: Edit Address Feature

  Scenario: Editing an Address Successfully
    Given I am on the "Ubah Alamat" (Edit Address) page
    When I modify the following details:
      | Label Alamat            | Office Address    |
      | Nama Lengkap            | Jane Smith        |
      | No. Handphone           | 081345654567      |
      | Kota dan Kecamatan      | Rejang Lebong, Curup Tengah |
      | Kode Pos                | 67890             |
      | Alamat Lengkap          | Jl. Coba Street   |
      | Catatan untuk kurir     | This is a delivery note |
      | Negara                  | Indonesia         |
      | Provinsi                | Bengkulu        |
    And I check the "Atur sebagai alamat utama" checkbox
    And I click the "Simpan" button
    Then I should see a success message confirming the address has been updated
    And the updated address details should be reflected in my address list

  Scenario: Editing an Address with Incomplete Information
    Given I am on the "Ubah Alamat" (Edit Address) page
    When I modify the following details with missing information:
      | Label Alamat            | Work Address      |
      | Nama Lengkap            |                  |
      | No. Handphone           | 081344567654     |
      | Kota dan Kecamatan      | Malang, Lowokwaru |
      | Kode Pos                |                  |
      | Alamat Lengkap          | Jl. Example Street, No. 123 |
      | Catatan untuk kurir     |                    |
      | Negara                  | Indonesia         |
      | Provinsi                | Jawa Timur        |
    And I leave the "Atur sebagai alamat utama" checkbox unchecked
    And I click the "Simpan" button
    Then I should see error messages indicating the missing information
    And the address details should not be updated in my address list

  Scenario: Editing an Address and Canceling
    Given I am on the "Ubah Alamat" (Edit Address) page
    When I modify the following details:
      | Label Alamat            | Office Address    |
      | Nama Lengkap            | John Doe          |
      | No. Handphone           | 081345676545      |
      | Kota dan Kecamatan      | Jakarta, Kemang   |
      | Kode Pos                | 12345             |
      | Alamat Lengkap          | Jl. Original Street |
      | Catatan untuk kurir     | This is a delivery note |
      | Negara                  | Indonesia         |
      | Provinsi                | DKI Jakarta       |
    And I check the "Atur sebagai alamat utama" checkbox
    And I click the "Batal" button
    Then I should be redirected to the previous page
    And the address details should not be updated in my address list