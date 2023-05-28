
[+] Added tables
  - Post
  - Account
  - Session
  - Message
  - User
  - Group
  - Item
  - GroupUser
  - VerificationToken
  - _GroupUser

[*] Changed the `Account` table
  [+] Added unique index on columns (provider, provider_account_id)
  [+] Added foreign key on columns (user_id)

[*] Changed the `Group` table
  [+] Added unique index on columns (lastWinnerId)
  [+] Added foreign key on columns (lastWinnerId)

[*] Changed the `GroupUser` table
  [+] Added foreign key on columns (groupId)
  [+] Added foreign key on columns (userId)

[*] Changed the `Item` table
  [+] Added foreign key on columns (group_id)

[*] Changed the `Message` table
  [+] Added foreign key on columns (session_id)

[*] Changed the `Post` table
  [+] Added foreign key on columns (authorId)

[*] Changed the `Session` table
  [+] Added unique index on columns (session_token)
  [+] Added foreign key on columns (user_id)

[*] Changed the `User` table
  [+] Added unique index on columns (email)

[*] Changed the `VerificationToken` table
  [+] Added unique index on columns (token)
  [+] Added unique index on columns (identifier, token)

[*] Changed the `_GroupUser` table
  [+] Added unique index on columns (A, B)
  [+] Added index on columns (B)
  [+] Added foreign key on columns (A)
  [+] Added foreign key on columns (B)

