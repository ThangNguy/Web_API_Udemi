﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB_API.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
